export class WebStorage {
    get length() {
        return this.store.length;
    }
    getItem(key) {
        return WebStorage.parseRawValue(this.store.getItem(key));
    }
    setItem(key, value) {
        this.store.setItem(key, JSON.stringify(value));
        return this;
    }
    removeItem(key) {
        this.store.removeItem(key);
        return this;
    }
    clears(keys) {
        for (let i = 0; i < keys.length; i++) {
            const e = keys[i];
            this.store.removeItem(e);
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
//# sourceMappingURL=webStorage.js.map