module.exports = {
    pathPrefix: "",
    plugins: [
        {
            resolve: `gatsby-theme-blog`,
            options: {},
        },
    ],
    // Customize your site metadata:
    siteMetadata: {
        title: `Be Best Dev`,
        siteUrl: `https://www.bebest.dev`,
        author: `Vova Artsiukhou`,
        description: `Let's learn!`,
        social: [
            {
                name: `github`,
                url: `https://github.com/artsiukhou`,
            },
        ],
    },
}
