[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md) &gt; [removeCallback](./decentraland-ecs.observable.removecallback.md)

# Observable.removeCallback method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Remove a callback from the Observable object

**Signature:**
```javascript
removeCallback(callback: (eventData: T, eventState: ObserverEventState) => void, scope?: any): boolean;
```
**Returns:** `boolean`

false if it doesn't belong to this Observable

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `callback` | `(eventData: T, eventState: ObserverEventState) => void` | the callback to remove |
|  `scope` | `any` | optional scope. If used only the callbacks with this scope will be removed |

