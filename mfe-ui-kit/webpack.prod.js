const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common.js');
const deps = require('./package.json').dependencies;
const path = require('path');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // Benzersiz dosya adı oluşturur
    path: path.resolve(__dirname, '../dist/ui-kit'), // DÜZELTİLDİ
    publicPath: '/ui-kit/',                             // Doğru, her zaman /ui-kit/ altına yayınlanacak
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_ui_kit',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);