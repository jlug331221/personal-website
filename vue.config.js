module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/personal-website/'
    : '/',
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  }
}
