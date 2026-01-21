/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: true,
    devIndicators: false,
    output: 'standalone',
    images: {
        qualities: [25, 50, 75, 95],
    },
    experimental: {
        turbopackFileSystemCacheForDev: true,
        // Also for production builds if running in CI/CD:
        turbopackFileSystemCacheForBuild: true,
    },
};

export default nextConfig;
