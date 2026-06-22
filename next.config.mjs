/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site keeps deploying to GitHub Pages
  // (custom domain jvmarteportfolio.com via the CNAME file).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
