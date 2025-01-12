export type StoreValue = boolean | number | string | ReadonlyArray<StoreValue | null> | StoreObject;
export interface StoreObject {
    readonly [key: string]: StoreValue | null;
}
export declare abstract class WebStorage {
    /** The {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API | Web Storage API} instance on which to add, update, or delete store values. */
    protected abstract readonly store: Storage;
    get length(): number;
    getItem<T extends StoreValue>(key: string): T | null;
    setItem<T extends StoreValue>(key: string, value: T): this;
    removeItem(key: string): this;
    clears(keys: string[]): this;
    static parseRawValue<T extends StoreValue>(rawValue: string | null): T | null;
}
