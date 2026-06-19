/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Mirror jawslawnandsnow.com's URL shape (/about/, /get-a-quote/) for SEO parity.
  trailingSlash: true,
};

export default nextConfig;
