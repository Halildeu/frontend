const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common.js');
const deps = require('./package.json').dependencies;
const path = require('path');

const prodConfig = {
  mode: 'production',
    output: {
      path: path.resolve(__dirname, '../dist/shell'),
      publicPath: '/',
      clean: true,
    },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_shell',
      remotes: {
        mfe_suggestions: 'mfe_suggestions@/suggestions/remoteEntry.js',
        mfe_ethic: 'mfe_ethic@/ethic/remoteEntry.js',
        mfe_ui_kit: 'mfe_ui_kit@/ui-kit/remoteEntry.js',
      },
      exposes: {
        './logic': './src/exposed-logic.ts',
      },
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

module.exports = merge(commonConfig, prodConfig);