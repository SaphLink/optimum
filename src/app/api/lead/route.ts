const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] ?? character),
  );

export async function POST(request: Request) {
  const formData = await request.formData();
  const form = new URL(request.url).searchParams.get("form") ?? "website";
  const recipient = process.env.NEXT_PUBLIC_EMAIL;

  if (!recipient || !process.env.RESEND_API_KEY) {
    return new Response("Email delivery is not configured.", { status: 500 });
  }

  const fields = Array.from(formData.entries()).filter(
    ([key, value]) => typeof value === "string" && !key.startsWith("_"),
  ) as [string, string][];
  const replyTo = fields.find(([key]) => key.toLowerCase() === "email")?.[1];
  const details = fields
    .map(([key, value]) =>
      "<tr><td style=\"padding:8px;border:1px solid #eadbcd\"><strong>" +
      escapeHtml(key) +
      "</strong></td><td style=\"padding:8px;border:1px solid #eadbcd\">" +
      escapeHtml(value) +
      "</td></tr>",
    )
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Optimum Laser Website <onboarding@resend.dev>",
      to: [recipient],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject: "New Optimum Laser lead — " + form,
      html: "<h2>New website lead</h2><p><strong>Form:</strong> " + escapeHtml(form) + "</p><table style=\"border-collapse:collapse\">" + details + "</table>",
    }),
  });

  if (!response.ok) {
    return new Response("Email delivery failed.", { status: 502 });
  }

  return Response.redirect(new URL("/thank-you?form=" + encodeURIComponent(form), request.url), 303);
}
