import path from 'path';

module.exports = {
	cache: true,
	entry: {
	  preload: './dist/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	},
	module: {
		loaders: [
			// required to write 'require('./style.css')'
			{ test: /\.css$/,    loader: 'style-loader!css-loader' },

			// required for bootstrap icons
			{ test: /\.woff$/,   loader: 'url-loader?prefix=font/&limit=5000&mimetype=application/font-woff' },
			{ test: /\.ttf$/,    loader: 'file-loader?prefix=font/' },
			{ test: /\.eot$/,    loader: 'file-loader?prefix=font/' },
			{ test: /\.svg$/,    loader: 'file-loader?prefix=font/' }
		]
	},
	plugins: []
};