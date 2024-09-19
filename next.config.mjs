/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: ''
            }
        ]
    },
    webpack: (config, { isServer }) => {
        // Custom configurations, make sure not to interfere with HMR
        return config;
    },
};

export default nextConfig;
