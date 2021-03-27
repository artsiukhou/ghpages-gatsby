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
//        author: `My Name`,
        description: `Let's learn!`,
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/gatsbyjs`,
            },
            {
                name: `github`,
                url: `https://github.com/artsiukhou`,
            },
        ],
    },
}
