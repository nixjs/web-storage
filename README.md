# @nixjs23n6/web-storage

A minimalistic Typescript plugin for web storage

## Install

`yarn add @nixjs23n6/web-storage`

## Usage

### New instance

```typescript
import { LocalStorage, SessionStorage, WebStorage } from '@nixjs23n6/web-storage'

const localStorage = new LocalStorage();
// const sessionStorage = new SessionStorage();

localStorage.setItem("ACCESS_TOKEN_KEY", "ACCESS_TOKEN")
localStorage.getItem<string>("ACCESS_TOKEN_KEY")
```

### Extend

```typescript
import { LocalStorage } from '@nixjs23n6/web-storage'

class LocalStore extends LocalStorage {

  authorize (token: string): this {
    return this.setItem('ACCESS_TOKEN', token);
  }

  deAuthorize (): this {
    return this.removeItem('ACCESS_TOKEN');
  }

}

const store =  new LocalStore();
```

### Static class

```typescript
import { LocalStorageStatic } from '@nixjs23n6/web-storage'

LocalStorageStatic.setItem("ACCESS_TOKEN_KEY", "ACCESS_TOKEN")
LocalStorageStatic.getItem<string>("ACCESS_TOKEN_KEY")
```
