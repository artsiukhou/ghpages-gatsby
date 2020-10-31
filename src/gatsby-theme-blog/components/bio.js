import BioContent from "./bio-content"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"

const Bio = () => {
    const data = useStaticQuery(bioQuery)
    const {
        site: {
            siteMetadata: { author },
        },
        avatar,
    } = data

    const avatarCss = css({
        mr: 2,
        mb: 0,
        width: 48,
        minWidth: 48,
        borderRadius: 99999,
    })
    return (
        <Flex css={css({ mb: 4, alignItems: `center` })}>
            {avatar ? (
                <Image
                    fixed={avatar.childImageSharp.fixed}
                    alt={author}
                    css={avatarCss}
                />
            ) : (
                <div
                    css={avatarCss}
                    role="presentation"
                />
            )}
            <Styled.div>
                <BioContent />
            </Styled.div>
        </Flex>
    )
}

const bioQuery = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
        avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
            childImageSharp {
                fixed(width: 48, height: 48) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Bio
