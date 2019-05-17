[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [add](./decentraland-ecs.observable.add.md)

# Observable.add method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Create a new Observer with the specified callback

**Signature:**
```javascript
add(callback: (eventData: T, eventState: ObserverEventState) => void, mask?: number, insertFirst?: boolean, scope?: any, unregisterOnFirstCall?: boolean): null | Observer<T>;
```
**Returns:** `null | Observer<T>`

the new observer created for the callback

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `callback` | `(eventData: T, eventState: ObserverEventState) => void` | the callback that will be executed for that Observer |
|  `mask` | `number` | the mask used to filter observers |
|  `insertFirst` | `boolean` | if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present. |
|  `scope` | `any` | optional scope for the callback to be called from |
|  `unregisterOnFirstCall` | `boolean` | defines if the observer as to be unregistered after the next notification |

