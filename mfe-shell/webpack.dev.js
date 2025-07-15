const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common.js');
const deps = require('./package.json').dependencies;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_shell',
      remotes: {
        mfe_suggestions: 'mfe_suggestions@http://localhost:3001/remoteEntry.js',
        mfe_ethic: 'mfe_ethic@http://localhost:3002/remoteEntry.js',
        mfe_ui_kit: 'mfe_ui_kit@http://localhost:3003/remoteEntry.js',
      },
            exposes: {
        './logic': './src/exposed-logic.ts',
      },

      // Hatanın olduğu 'shared' bölümünün tam ve doğru hali aşağıdadır.
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, requiredVersion: deps['react-dom'] },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
        '@reduxjs/toolkit': {
          singleton: true,
          requiredVersion: deps['@reduxjs/toolkit'],
        },
        'react-redux': {
          singleton: true,
          requiredVersion: deps['react-redux'],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);