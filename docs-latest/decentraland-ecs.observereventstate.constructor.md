[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [ObserverEventState](./decentraland-ecs.observereventstate.md) &gt; [constructor](./decentraland-ecs.observereventstate.constructor.md)

# ObserverEventState.constructor method

Create a new EventState

**Signature:**
```javascript
constructor(mask: number, skipNextObservers?: boolean, target?: any, currentTarget?: any);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `mask` | `number` | defines the mask associated with this state |
|  `skipNextObservers` | `boolean` | defines a flag which will instruct the observable to skip following observers when set to true |
|  `target` | `any` | defines the original target of the state |
|  `currentTarget` | `any` | defines the current target of the state |

