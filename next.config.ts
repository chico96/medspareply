import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/med-spa-google-review",
        destination: "/med-spa-google-review-reply",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
