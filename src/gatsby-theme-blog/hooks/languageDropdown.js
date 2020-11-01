import { localStorage } from "../../local-storage/localStorage"
import { DEFAULT_LANG_KEY, getLangOption } from "../../defaults/language"

import React from "react"

const LOCAL_STORAGE_LANG_KEY = "blog-language";

const langStorage = {
    get: () => {
        return localStorage.get(LOCAL_STORAGE_LANG_KEY, DEFAULT_LANG_KEY);
    },
    set: (value) => {
        return localStorage.set(LOCAL_STORAGE_LANG_KEY, value);
    }
};

export function useLanguageDropdown() {
    // In the state and storage we store only lang keys (eg "en", "ru"), not the full options objects.
    const [langKey, setLangKey] = React.useState(DEFAULT_LANG_KEY);
    React.useEffect(() => {
        setLangKey(langStorage.get());
    }, []);
    React.useEffect(() => {
        if (!langKey) {
            return;
        }
        langStorage.set(langKey);
    }, [langKey]);
    // As this is a dropdown hook, wrapping around simple keys and key setter into option/option setter
    // as it's needed for a dropdown
    const languageOption = getLangOption(langKey);
    const setLanguageOption = langChoice => setLangKey(langChoice.value);
    return [languageOption, setLanguageOption];
}

export default useLanguageDropdown;