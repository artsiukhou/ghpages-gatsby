export const localStorage = {
    get: (key, defaultValue) => {
        try {
            return window.localStorage.getItem(key) || defaultValue
        } catch (e) {
            console.warn("localStorage is disabled, please check your Site Settings.", e);
        }
    },
    set: (key, value) => {
        try {
            window.localStorage.setItem(key, value)
        } catch (e) {
            console.warn("localStorage is disabled, please check your Site Settings.", e);
        }
    }
};

export default localStorage
