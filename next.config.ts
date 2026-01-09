import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/random.bucket.migration",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
