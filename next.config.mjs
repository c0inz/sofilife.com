/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Prisma with libsql
  experimental: {
    serverComponentsExternalPackages: [
      "@prisma/adapter-libsql",
      "@libsql/client",
      "libsql",
    ],
  },
  // Ignore certain warnings
  webpack: (config) => {
    config.externals.push({
      "@libsql/client": "commonjs @libsql/client",
    });
    return config;
  },
  // Image domains for Unsplash
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
