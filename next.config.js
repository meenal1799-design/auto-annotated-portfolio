/** @type {import('next').NextConfig} */
const repo = 'auto-annotated-portfolio';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW,
        NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : ''
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
