
export const DEFAULT_LANG_KEY = "en";
export default DEFAULT_LANG_KEY;

export const SUPPORTED_LANG_OPTIONS = [
    {
        value: "ru",
        label: "🇷🇺",
    },
    {
        value: "en",
        label: "🇬🇧",
    },
];

export const DEFAULT_OPTION = getLangOption(DEFAULT_LANG_KEY);

export function getLangOption(langKey) {
    return SUPPORTED_LANG_OPTIONS.find(item => item.value === langKey);
}
