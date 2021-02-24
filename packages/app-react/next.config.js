module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.IgnorePlugin(/\/__tests__\/.*|.*\.(spec|test)\.[jt]sx?$/)
    )
    return config
  },
}
