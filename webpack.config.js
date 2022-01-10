const path = require("path");
const dev = process.env.NODE_ENV == "development";
const webpack = require("webpack");
const liveServer = require("live-server");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();
var colors = require("colors");
colors.disable();
if (dev) {
    liveServer.start({
        file: "index.html",
    });
}
const cssRulesModule = {
    test: /\.css?$/i,
    use: [
        "style-loader",
        {
            loader: "css-loader",
            options: {
                modules: true,
            },
        },
    ],
};

const tsxRulesModule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
};
const loaderImgRulesModule = {
    test: /\.svg$/,
    use: [
        {
            loader: "svg-url-loader",
            options: {
                limit: 10000,
            },
        },
    ],
};

module.exports = {
    mode: "development",
    watch: dev,
    entry: "index.tsx",
    module: {
        rules: [tsxRulesModule, cssRulesModule, loaderImgRulesModule],
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                /* options: see below */
            }),
        ],
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                MAPBOX_TOKEN: JSON.stringify(process.env.MAPBOX_TOKEN),
            },
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};
