/** @type {import('next').NextConfig} */
const repo = 'auto-annotated-portfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: isProd ? `/${repo}` : '',
    assetPrefix: isProd ? `/${repo}/` : '',
    trailingSlash: true,
    poweredByHeader: false,
    reactStrictMode: true
};

module.exports = nextConfig;
