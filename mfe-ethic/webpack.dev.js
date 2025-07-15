const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common.js');
const deps = require('./package.json').dependencies;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  devServer: {
    port: 3002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_ethic',
      filename: 'remoteEntry.js',
      remotes: {
        'mfe_shell': 'mfe_shell@http://localhost:3000/remoteEntry.js',
        'mfe_ui_kit': 'mfe_ui_kit@http://localhost:3003/remoteEntry.js',
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

module.exports = merge(commonConfig, devConfig);