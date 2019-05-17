[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [EventManager](./decentraland-ecs.eventmanager.md) &gt; [addListener](./decentraland-ecs.eventmanager.addlistener.md)

# EventManager.addListener method


**Signature:**
```javascript
addListener<T, X>(eventClass: IEventConstructor<T>, listener: X, listenerFunction: (this: X, event: T) => void): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eventClass` | `IEventConstructor<T>` |  |
|  `listener` | `X` |  |
|  `listenerFunction` | `(this: X, event: T) => void` |  |

