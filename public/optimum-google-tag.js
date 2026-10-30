(function () {
  if (window.__optimumGoogleTracking) return;
  window.__optimumGoogleTracking = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'AW-397121812');
  window.gtag('config', 'AW-397121812/vA2dCNbkpOAcEJSyrr0B', {
    phone_conversion_number: '516-495-4908'
  });

  if (!document.querySelector('script[data-optimum-google-tag]')) {
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=AW-397121812';
    tag.dataset.optimumGoogleTag = 'true';
    document.head.appendChild(tag);
  }

  var isLive = /^(www\.)?optimumlaserhairremoval\.com$/.test(window.location.hostname);
  var pendingKey = 'optimum_pending_lead';

  function formSource(form) {
    var named = form.querySelector('[name="form_name"], [name="form"]');
    if (named && named.value) return named.value;
    if (window.location.pathname === '/contact-us') return 'contact';
    if (window.location.pathname === '/') return 'homepage';
    return 'website';
  }

  document.addEventListener('click', function (event) {
    var target = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
    if (target && isLive) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-397121812/MOdwCNec7P4BEJSyrr0B',
        transport_type: 'beacon'
      });
    }
  }, true);

  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!(form instanceof HTMLFormElement) || event.defaultPrevented || !form.checkValidity()) return;
    var endpoint = new URL(form.action, window.location.href);
    if (endpoint.hostname !== 'formsubmit.co') return;
    try {
      sessionStorage.setItem(pendingKey, JSON.stringify({
        id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : String(Date.now()),
        form: formSource(form),
        created: Date.now()
      }));
    } catch (error) {}
  }, true);

  if (isLive && window.location.pathname === '/thank-you') {
    try {
      var pending = JSON.parse(sessionStorage.getItem(pendingKey) || 'null');
      if (pending && pending.created && Date.now() - pending.created < 30 * 60 * 1000) {
        sessionStorage.removeItem(pendingKey);
        window.gtag('event', 'conversion', {
          send_to: 'AW-397121812/CqaHCJPbrq0dEJSyrr0B',
          transaction_id: pending.id,
          transport_type: 'beacon'
        });
      }
    } catch (error) {}
  }
})();
