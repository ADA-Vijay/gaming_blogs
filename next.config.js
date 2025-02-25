/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "fama.b-cdn.net",
      "i0.wp.com",
      "ashgamewitted.wpcomstaging.com",
      "https://i0.wp.com/ashgamewitted.wpcomstaging.com/wp-content/uploads/2024/05/",
      "gamingblogs.local",
      "gameblogs.us23.cdn-alpha.com",
      "darkgreen-pigeon-940641.hostingersite.com",
      "editor.gametechanime.com"
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/ads.txt",
        destination: "https://config.playwire.com/dyn_ads/1025447/75402/ads.txt",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
