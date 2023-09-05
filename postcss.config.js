module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-preset-env")({
            stage: 2,
            features: {
                "logical-properties-and-values": false,
                "cascade-layers": false,
            },
        }),
        require("autoprefixer"),
        require("cssnano")({
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
    ],
    map: true,
};
