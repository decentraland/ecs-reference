[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [remove](./decentraland-ecs.observable.remove.md)

# Observable.remove method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove an Observer from the Observable object

**Signature:**
```javascript
remove(observer: null | Observer<T>): boolean;
```
**Returns:** `boolean`

false if it doesn't belong to this Observable

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `observer` | `null | Observer<T>` | the instance of the Observer to remove |

