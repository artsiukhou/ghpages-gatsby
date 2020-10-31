import React from "react"
import { Styled } from "theme-ui"

export default function BioContent() {
    return (
        <>
            This is where <Styled.a href="http://example.com/">your name</Styled.a>
            {` `}
            goes.
            <br />
            Or whatever, you make the rules!
        </>
    )
}
