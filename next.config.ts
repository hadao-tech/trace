import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath: "/trace",
  assetPrefix: "/trace",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
