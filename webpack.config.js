module.exports = {
    entry: "./src/js/index.jsx", 
    output:{
        path: "public",    
        filename: "script.js"    
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
            }
        ]
    }
}