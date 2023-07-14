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
                        removeAllButFirst: true,
                    },
                },
            ],
        }),
    ],
    map: { inline: false },
};
