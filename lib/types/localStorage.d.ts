import { StoreValue, WebStorage } from './webStorage';
export declare class LocalStorageStatic {
    static getItem<T extends StoreValue>(key: string): T | null;
    static setItem<T extends StoreValue>(key: string, value: T): typeof LocalStorageStatic;
    static removeItem(key: string): typeof LocalStorageStatic;
    static clears(keys: string[]): typeof LocalStorageStatic;
    static parseRawValue<T extends StoreValue>(rawValue: string | null): T | null;
}
export declare class LocalStorage extends WebStorage {
    protected readonly store: Storage;
}
