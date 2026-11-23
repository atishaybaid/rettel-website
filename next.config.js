/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old template routes go to the offline page. Any other unknown path
  // renders the offline page via app/not-found.tsx.
  async redirects() {
    return [
      { source: '/login', destination: '/', permanent: true },
      { source: '/register', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
