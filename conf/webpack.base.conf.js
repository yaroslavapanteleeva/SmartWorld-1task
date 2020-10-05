const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

/* const PAGES_DIR = PATHS.src;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith('.html')); */
    


module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `[name].[contenthash].js`,
        path: PATHS.dist,
        publicPath: ''
    },
    /* resolve: {
        alias: {
            fonts: path.resolve(__dirname, 'src/fonts/')
        }
    },  */
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true 
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'

                    }, {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: `./postcss.config.js`
                            }
                        }
                    }
                ]
            }, {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                        
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: `./postcss.config.js`
                            }
                        }
                    }, {
                        loader: 'sass-loader',
            
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: [
                    path.resolve(__dirname, '../src/fonts'),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    },
                },
            }, {
                test: /\.(woff(2)?|ttf|eot|svg)?$/,
                include: [
                    path.resolve(__dirname, '../src/fonts')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].[contenthash].css`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${PATHS.src}/img`,
                    to: 'img/'
                }  
            ],
        }), 
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};