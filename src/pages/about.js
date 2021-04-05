import React from "react"

import Layout from "../gatsby-theme-blog/components/layout"
import SEO from "../gatsby-theme-blog/components/seo"
import Footer from "../gatsby-theme-blog/components/home-footer"
import { Styled } from "theme-ui"


const AboutPage = ({ location, siteTitle, socialLinks }) => {
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About" />
            Hey!
            <Styled.br/>
            I'm Vova and I'm happy to see you here.
            <Footer socialLinks={socialLinks} />
        </Layout>
    )
}

export default AboutPage
