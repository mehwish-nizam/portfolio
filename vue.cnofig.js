module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/portfolio/': '/',
    css: {
    loaderOptions: {
        sass: {
            additionalData: `
            @import "@/assets/scss/_mixins.scss";
        `
        }
    }
    }
};