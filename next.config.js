/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    // Security headers for external scripts (booking plugin and chat widget)
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plugin.myonlineappointment.com https://cdn.chaty.app; frame-src 'self' https://plugin.myonlineappointment.com;"
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
