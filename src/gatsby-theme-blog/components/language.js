import localStorage from "../../local-storage/localStorage"

import React from "react"

import ReactDropdown from "react-dropdown"

export const LanguageDropdown = props => <ReactDropdown {...props} />

const DEFAULT_LANG = "en"

LanguageDropdown.defaultProps = {
    options: ["ru", "en"],
    value: DEFAULT_LANG,
}

const langStorage = {
    get: () => {
        return localStorage.get(LOCAL_STORAGE_LANG_KEY, DEFAULT_LANG);
    },
    set: (value) => {
        return localStorage.set(LOCAL_STORAGE_LANG_KEY, value);
    }
};

const LOCAL_STORAGE_LANG_KEY = "blog-lang";

export function useLanguageDropdown() {
    const [language, setLanguage] = React.useState(null);
    React.useEffect(() => {
        const lang = langStorage.get();
        if (!lang) {
            return;
        }
        setLanguage(lang);
    }, [])
    React.useEffect(() => {
        if (!language) {
            return;
        }
        langStorage.set(language);
    }, [language])
    return [language, setLanguage];
}