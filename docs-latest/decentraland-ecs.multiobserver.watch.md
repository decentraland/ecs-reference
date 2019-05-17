[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [MultiObserver](./decentraland-ecs.multiobserver.md) &gt; [Watch](./decentraland-ecs.multiobserver.watch.md)

# MultiObserver.Watch method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Raise a callback when one of the observable will notify

**Signature:**
```javascript
static Watch<T>(observables: Observable<T>[], callback: (eventData: T, eventState: ObserverEventState) => void, mask?: number, scope?: any): MultiObserver<T>;
```
**Returns:** `MultiObserver<T>`

the new MultiObserver

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `observables` | `Observable<T>[]` | defines a list of observables to watch |
|  `callback` | `(eventData: T, eventState: ObserverEventState) => void` | defines the callback to call on notification |
|  `mask` | `number` | defines the mask used to filter notifications |
|  `scope` | `any` | defines the current scope used to restore the JS context |

