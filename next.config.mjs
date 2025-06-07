import withVideos from 'next-videos';

const nextConfig = withVideos({
  reactStrictMode: true,
  output: "export",
});

export default nextConfig;
