import Bio from "./bio"

import { css, Styled } from "theme-ui"

import { Link } from "gatsby"
import React from "react"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
    const makeLink = (color) => {
        return (
            <Styled.a
                as={Link}
                css={css({
                    color: {color},
                    boxShadow: `none`,
                    textDecoration: `none`,
                })}
                to={`/`}
            >
                {children}
            </Styled.a>
        )
    }

    if (location.pathname === rootPath) {
        return (
            <Styled.h1
                css={css({
                    my: 0,
                    fontSize: 4,
                })}
            >
                {makeLink(`inherit`)}
            </Styled.h1>
        )
    }
    return (
        <Styled.h3
            as="p"
            css={css({
                my: 0,
            })}
        >
            {makeLink(`primary`)}
        </Styled.h3>
    )
}

export default ({ children, title, ...props }) => {
    return (
        <header>
            <div
                css={css({
                    maxWidth: `container`,
                    mx: `auto`,
                    px: 3,
                    pt: 4,
                })}
            >
                <div
                    css={css({
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                        mb: 4,
                    })}
                >
                    <Title {...props}>{title}</Title>
                    {children}
                </div>
                {props.location.pathname === rootPath && <Bio />}
            </div>
        </header>
    )
}
