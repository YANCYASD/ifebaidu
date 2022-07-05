const path = require("path");

module.exports = {
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname,""),
        filename:"./bundle.js"
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader"],
        }]
    },
    mode:"none",
    // devtool:'source-map',
}