module.exports = {
  reactStrictMode: false,
}

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: {
          name: '[name].[ext]'
          }
        },
      ],
    })

    return config
  },
}