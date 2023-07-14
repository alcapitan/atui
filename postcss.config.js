module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-preset-env")({
            stage: 2,
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
