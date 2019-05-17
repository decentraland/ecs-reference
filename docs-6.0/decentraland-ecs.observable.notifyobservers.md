[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [notifyObservers](./decentraland-ecs.observable.notifyobservers.md)

# Observable.notifyObservers method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Notify all Observers by calling their respective callback with the given data Will return true if all observers were executed, false if an observer set skipNextObservers to true, then prevent the subsequent ones to execute

**Signature:**
```javascript
notifyObservers(eventData: T, mask?: number, target?: any, currentTarget?: any): boolean;
```
**Returns:** `boolean`

false if the complete observer chain was not processed (because one observer set the skipNextObservers to true)

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eventData` | `T` | defines the data to send to all observers |
|  `mask` | `number` | defines the mask of the current notification (observers with incompatible mask (ie mask &amp; observer.mask === 0) will not be notified) |
|  `target` | `any` | defines the original target of the state |
|  `currentTarget` | `any` | defines the current target of the state |

