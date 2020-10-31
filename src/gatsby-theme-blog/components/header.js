import Bio from "./bio"
import { LanguageDropdown, useLanguageDropdown } from "./language"

import sun from "gatsby-theme-blog/assets/sun.png"
import moon from "gatsby-theme-blog/assets/moon.png"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Switch from "gatsby-theme-blog/src/components/switch"

import { css, useColorMode, Styled } from "theme-ui"

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

function makeColorModeToggle(colorMode, setColorMode) {
    function makeIcon(src, alt) {
        const iconCss = [{ pointerEvents: `none`, margin: 4 }]
        return (
            <img
                alt={alt}
                src={src}
                width="16"
                height="16"
                role="presentation"
                css={iconCss}
            />
        )
    }
    const checkedIcon = makeIcon(moon, "moon indicating dark mode")
    const uncheckedIcon = makeIcon(sun, "sun indicating light mode")

    const isDark = colorMode === `dark`
    const toggleColorMode = _ => {
        setColorMode(isDark ? `light` : `dark`)
    }
    return (
        <Switch
            aria-label={`Toggle dark mode ${isDark ? `off` : `on`}`}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
        />
    )
}

function makeLangDropdown(language, setLanguage) {
    const selectLanguage = (langChoice) => {
        setLanguage(langChoice.value)
    }
    return (
        <LanguageDropdown
            onChange={selectLanguage}
            value={language}
        />
    )
}

export default ({ children, title, ...props }) => {
    const blogThemeConfig = useBlogThemeConfig();
    const { disableThemeUiStyling } = blogThemeConfig;

    const [colorMode, setColorMode] = useColorMode();
    const switchToggle = disableThemeUiStyling
        ? null
        : makeColorModeToggle(colorMode, setColorMode);

    const [language, setLanguage] = useLanguageDropdown();
    const langDropdown = makeLangDropdown(language, setLanguage);
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
                    {langDropdown}
                    {switchToggle}
                </div>
                {props.location.pathname === rootPath && <Bio />}
            </div>
        </header>
    )
}
