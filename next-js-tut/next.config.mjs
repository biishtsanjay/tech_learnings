/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.istockphoto.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/user",
        destination: "/login",
        permanent: false,
      },
      {
        source: "/user/:userId",
        destination: "/study",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
