/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com', // Allow images from Cloudinary
        },
      ],
    },
  };
  
  export default nextConfig;
  