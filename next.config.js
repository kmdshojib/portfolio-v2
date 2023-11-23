/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    env: {
        stripe_key: process.env.EMAIL,
        stripe_secretkey: process.env.PASSWORD,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
