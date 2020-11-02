import { SUPPORTED_LANG_OPTIONS, DEFAULT_LANG_KEY, getLangOption } from "../../defaults/language"
import { localStorage } from "../../local-storage/localStorage"

import React from "react"
import ReactDropdown from "react-dropdown"

const LOCAL_STORAGE_LANG_KEY = "blog-language";

const langStorage = {
    get: () => {
        return localStorage.get(LOCAL_STORAGE_LANG_KEY, DEFAULT_LANG_KEY);
    },
    set: (value) => {
        return localStorage.set(LOCAL_STORAGE_LANG_KEY, value);
    }
};

class LanguageDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLang: langStorage.get(),
        };
    }

    render() {
        return (
            <ReactDropdown
                value={getLangOption(this.state.selectedLang)}
                options={SUPPORTED_LANG_OPTIONS}
                onChange={(choice) => {this.onChange(choice)}}
            />
        );
    }

    onChange(langChoice) {
        const selectedLang = langChoice.value;
        langStorage.set(selectedLang);
        this.setState({
            selectedLang: selectedLang
        });
    }
}

export default LanguageDropdown
