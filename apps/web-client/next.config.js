/**
 * @type { import('next').NextConfig }
 **/
module.exports = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }
    ]
  }
}
