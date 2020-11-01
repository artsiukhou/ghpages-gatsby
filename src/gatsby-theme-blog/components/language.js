import { SUPPORTED_LANG_OPTIONS, DEFAULT_OPTION } from "../../defaults/language"

import React from "react"
import ReactDropdown from "react-dropdown"


export const LanguageDropdown = props => <ReactDropdown {...props} />

export default LanguageDropdown

LanguageDropdown.defaultProps = {
    options: SUPPORTED_LANG_OPTIONS,
    value: DEFAULT_OPTION,
};
