const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { extendDefaultPlugins } = require("svgo");
module.exports = {
  // TODO 入口
  entry: "./src/main.js",
  // TODO 输出
  output: {
    filename: './[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //重新打包时候会自动清除
    clean: true,
  },
  // TODO 加载器
  module: {
    rules: [
      //  loader 配置
      //css 资源
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // NOTE: 下载两个包
      },
      //    less资源
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //    sass资源
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //   stylus资源
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"], // 将 Stylus 文件编译为 CSS
      },
      //   处理图片资源
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }, //小于10kb
        },
        generator: {
          //输出图片名称
          filename: "./images/[hash][query].[ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        loader: "url-loader",
        type: 'javascript/auto',

        // 设置配置选项
        options: {
          // 如果小于8kb使用base64 处理
          // 优点 减少对服务器的请求，减轻服务器端压力
          // 缺点 体积会变大
          limit: 8 * 1024,
          name: "./images/[hash:10].[ext]", // 取hash值的前10位，ext保留原来的后缀名
          esModule: false, //关闭es6模块化
        }
      },
      // 处理html资源
      {
        test: /\.(html)$/,
        use: {
         loader: 'html-loader',
         options: {
               attrs: ['img:src', 'img:data-src', 'audio:src'],//html图片输出
               minimize:true
         }
        }},
      //    处理字体文件和其他音视频
      {
        test: /\.(ttf|woff2?|map3|mp4|avi)$/,
        type: "asset/resource",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }, //小于10kb
        },
        generator: {
          //输出图片名称
          filename: "./media/[hash][ext][query]",
        },
      },
      //    处理bable
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      },
      // ts
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // TODO 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, 
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // TODO 开发服务器
  devServer: {
    host: "localhost",
    port: "3000",
    open: true,
  },
  // TODO 模式
  // mode: "development",
  mode: "production",
};