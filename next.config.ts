import type { NextConfig } from "next";
import path from "path";

const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["*.trycloudflare.com"],
};

export default nextConfig;
