"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorage = exports.SessionStorageStatic = void 0;
const webStorage_1 = require("./webStorage");
class SessionStorageStatic {
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
exports.SessionStorageStatic = SessionStorageStatic;
class SessionStorage extends webStorage_1.WebStorage {
    constructor() {
        super(...arguments);
        this.store = window.sessionStorage;
    }
}
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=sessionStorage.js.map