module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig();

    return {
        dir: {
        input: "src",
        output: "public",
        },
    };
};