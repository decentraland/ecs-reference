[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [notifyObserversWithPromise](./decentraland-ecs.observable.notifyobserverswithpromise.md)

# Observable.notifyObserversWithPromise method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Calling this will execute each callback, expecting it to be a promise or return a value. If at any point in the chain one function fails, the promise will fail and the execution will not continue. This is useful when a chain of events (sometimes async events) is needed to initialize a certain object and it is crucial that all callbacks will be executed. The order of the callbacks is kept, callbacks are not executed parallel.

**Signature:**
```javascript
notifyObserversWithPromise(eventData: T, mask?: number, target?: any, currentTarget?: any): Promise<T>;
```
**Returns:** `Promise<T>`

will return a Promise than resolves when all callbacks executed successfully.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eventData` | `T` | The data to be sent to each callback |
|  `mask` | `number` | is used to filter observers defaults to -1 |
|  `target` | `any` | defines the callback target (see EventState) |
|  `currentTarget` | `any` | defines he current object in the bubbling phase |

