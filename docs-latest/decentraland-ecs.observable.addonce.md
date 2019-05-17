[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [addOnce](./decentraland-ecs.observable.addonce.md)

# Observable.addOnce method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a new Observer with the specified callback and unregisters after the next notification

**Signature:**
```javascript
addOnce(callback: (eventData: T, eventState: ObserverEventState) => void): null | Observer<T>;
```
**Returns:** `null | Observer<T>`

the new observer created for the callback

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `callback` | `(eventData: T, eventState: ObserverEventState) => void` | the callback that will be executed for that Observer |

