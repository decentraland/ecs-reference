[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [ObserverEventState](./decentraland-ecs.observereventstate.md) &gt; [initalize](./decentraland-ecs.observereventstate.initalize.md)

# ObserverEventState.initalize method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Initialize the current event state

**Signature:**
```javascript
initalize(mask: number, skipNextObservers?: boolean, target?: any, currentTarget?: any): ObserverEventState;
```
**Returns:** `ObserverEventState`

the current event state

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `mask` | `number` | defines the mask associated with this state |
|  `skipNextObservers` | `boolean` | defines a flag which will instruct the observable to skip following observers when set to true |
|  `target` | `any` | defines the original target of the state |
|  `currentTarget` | `any` | defines the current target of the state |

