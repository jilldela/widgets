// webpack.config.js
var path = require('path');

module.exports = {
  entry: "./app/frontend/widgets.jsx",
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  },
   devtool: 'source-map',
   resolve: {
   extensions: ['.js', '.jsx', '*']
 },
 module: {
   loaders: [
     {
       test: [/\.jsx?$/],
       exclude: /(node_modules)/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 }
};
