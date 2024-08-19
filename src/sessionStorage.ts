import { StoreValue, WebStorage } from './webStorage'

export class SessionStorageStatic {
    static getItem<T extends StoreValue>(key: string): T | null {
        return this.parseRawValue(sessionStorage.getItem(key))
    }

    static setItem<T extends StoreValue>(key: string, value: T) {
        sessionStorage.setItem(key, JSON.stringify(value))
        return this
    }

    static removeItem(key: string) {
        sessionStorage.removeItem(key)
        return this
    }

    static clears(keys: string[]) {
        for (let i = 0; i < keys.length; i++) {
            const e = keys[i]
            sessionStorage.removeItem(e)
        }
        return this
    }

    static parseRawValue<T extends StoreValue>(rawValue: string | null): T | null {
        try {
            return rawValue ? JSON.parse(rawValue) : null
        } catch (error) {
            return null
        }
    }
}

export class SessionStorage extends WebStorage {
    protected readonly store = window.sessionStorage
}
