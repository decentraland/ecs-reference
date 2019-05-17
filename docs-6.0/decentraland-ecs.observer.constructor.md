[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observer](./decentraland-ecs.observer.md) &gt; [constructor](./decentraland-ecs.observer.constructor.md)

# Observer.constructor method

Creates a new observer

**Signature:**
```javascript
constructor(
    callback: (eventData: T, eventState: ObserverEventState) => void, 
    mask: number, 
    scope?: any);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `callback` | `(eventData: T, eventState: ObserverEventState) => void` | defines the callback to call when the observer is notified |
|  `mask` | `number` | defines the mask of the observer (used to filter notifications) |
|  `scope` | `any` | defines the current scope used to restore the JS context |

