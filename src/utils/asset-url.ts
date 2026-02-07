export function withBasePath(url?: string | null): string | null {
    if (!url) {
        return null;
    }

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    if (!basePath || !url.startsWith('/')) {
        return url;
    }

    if (url.startsWith(`${basePath}/`) || url === basePath) {
        return url;
    }

    return `${basePath}${url}`;
}
