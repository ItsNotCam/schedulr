const path = require('path');

module.exports = {
  // This is the entry point or start of our react application
  entry: "./app.jsx",

  // The plain compiled Javascript will be output into this file
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: "bundle.js"
  },

  // This section describes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that have a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            // These are the specific transformations we'll be using.
            presets: ["@babel/preset-react", "@babel/preset-env"]
          }
        }
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map",

	// set mode to production
	// mode: "production",
	mode: "development",

  // Resolve extensions for import statements
  resolve: {
    extensions: ['.js', '.jsx']
  }
};