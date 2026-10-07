/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    // Security headers for external scripts (booking plugin, chat widget, and Cherry financing)
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plugin.myonlineappointment.com https://cdn.chaty.app https://files.withcherry.com https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com; frame-src 'self' https://plugin.myonlineappointment.com https://www.googletagmanager.com https://www.google.com;"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
