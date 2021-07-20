module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-syntax-decorators', { legacy: true }],
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ],
    ],
  }
}
