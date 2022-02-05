const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const { presets } = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // 'react-native-gesture-handler',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.js$|tsx?$/,
  include: [
    path.resolve(__dirname, 'index.js'),
    path.resolve(__dirname, 'App.tsx'),
    path.resolve(__dirname, 'src'),
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

const reanimatedLoaderConfiguration = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules\/(?!react-native-reanimated)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        {
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      ],
      plugins: ['babel-plugin-react-native-web'],
    },
  },
};

module.exports = (env, argv) => {
  return {
    entry: [path.join(__dirname, 'index.js'), 'babel-polyfill'],
    output: {
      path: path.resolve(appDirectory, 'dist'),
      publicPath: argv.mode === 'development' ? '/' : './',
      filename: 'rnw.bundle.js',
    },
    resolve: {
      extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
      alias: {
        'react-native$': 'react-native-web',
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
      },
    },
    module: {
      rules: [
        babelLoaderConfiguration,
        imageLoaderConfiguration,
        reanimatedLoaderConfiguration,
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'web/index.html'),
      }),
      new webpack.DefinePlugin({ process: { env: {} } }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(argv.mode === 'development'),
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  };
};
