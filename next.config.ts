import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], deviceSizes: [480, 768, 1024, 1440, 1920], imageSizes: [96, 192, 384], unoptimized: true },
  poweredByHeader: false,
    basePath: '/arden-and-shear',
  output: 'export',
  trailingSlash: true,
};
export default nextConfig;
