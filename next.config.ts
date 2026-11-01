import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** 旧URL → 新URL（検索エンジンの評価を引き継ぐため 308 恒久リダイレクト） */
  async redirects() {
    return [{ source: "/leaders/leader-s", destination: "/leaders/elizabeth", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
