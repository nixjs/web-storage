import { StoreValue, WebStorage } from './webStorage';
export declare class SessionStorageStatic {
    static getItem<T extends StoreValue>(key: string): T | null;
    static setItem<T extends StoreValue>(key: string, value: T): typeof SessionStorageStatic;
    static removeItem(key: string): typeof SessionStorageStatic;
    static clears(keys: string[]): typeof SessionStorageStatic;
    static parseRawValue<T extends StoreValue>(rawValue: string | null): T | null;
}
export declare class SessionStorage extends WebStorage {
    protected readonly store: Storage;
}
