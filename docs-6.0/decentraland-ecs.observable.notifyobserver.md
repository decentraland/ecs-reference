[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [notifyObserver](./decentraland-ecs.observable.notifyobserver.md)

# Observable.notifyObserver method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Notify a specific observer

**Signature:**
```javascript
notifyObserver(observer: Observer<T>, eventData: T, mask?: number): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `observer` | `Observer<T>` | defines the observer to notify |
|  `eventData` | `T` | defines the data to be sent to each callback |
|  `mask` | `number` | is used to filter observers defaults to -1 |

