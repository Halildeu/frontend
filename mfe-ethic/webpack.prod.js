const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common.js');
const deps = require('./package.json').dependencies;
const path = require('path');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),        // Build çıktısı buraya gelir
    publicPath: '/ethic/',                        // Sunucudaki kök dizin (gerekirse değiştir)
    clean: true,                                  // Build öncesi dist temizlenir
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_ethic',
      filename: 'remoteEntry.js',
      remotes: {
        'mfe_shell': 'mfe_shell@/shell/remoteEntry.js',           // Prod sunucuya göre yolunu ayarla!
        'mfe_ui_kit': 'mfe_ui_kit@/ui-kit/remoteEntry.js',
      },
      exposes: {
        './EthicApp': './src/App.tsx',
      },
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'react-router-dom': { singleton: true, requiredVersion: deps['react-router-dom'] },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: deps['@reduxjs/toolkit'] },
        'react-redux': { singleton: true, requiredVersion: deps['react-redux'] },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);