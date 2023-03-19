/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {},
        },
        {
          loader: 'svgo-loader',
          options: {},
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig
