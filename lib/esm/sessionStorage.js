import { WebStorage } from './webStorage';
export class SessionStorageStatic {
    static getItem(key) {
        return this.parseRawValue(sessionStorage.getItem(key));
    }
    static setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return this;
    }
    static removeItem(key) {
        sessionStorage.removeItem(key);
        return this;
    }
    static clears(keys) {
        for (let i = 0; i < keys.length; i++) {
            const e = keys[i];
            sessionStorage.removeItem(e);
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
export class SessionStorage extends WebStorage {
    constructor() {
        super(...arguments);
        this.store = window.sessionStorage;
    }
}
//# sourceMappingURL=sessionStorage.js.map