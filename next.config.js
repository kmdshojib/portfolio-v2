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
    }
}

module.exports = nextConfig
