import { WebStorage } from './webStorage';
export class LocalStorageStatic {
    static getItem(key) {
        return this.parseRawValue(localStorage.getItem(key));
    }
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return this;
    }
    static removeItem(key) {
        localStorage.removeItem(key);
        return this;
    }
    static clears(keys) {
        for (let i = 0; i < keys.length; i++) {
            const e = keys[i];
            localStorage.removeItem(e);
        }
        return this;
    }
    static parseRawValue(rawValue) {
        try {
            return rawValue ? JSON.parse(rawValue) : null;
        }
        catch (error) {
            return null;
        }
    }
}
export class LocalStorage extends WebStorage {
    constructor() {
        super(...arguments);
        this.store = window.localStorage;
    }
}
//# sourceMappingURL=localStorage.js.map