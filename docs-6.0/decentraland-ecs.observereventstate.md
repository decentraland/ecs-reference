[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [ObserverEventState](./decentraland-ecs.observereventstate.md)

# ObserverEventState class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

A class serves as a medium between the observable and its observers

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`currentTarget`](./decentraland-ecs.observereventstate.currenttarget.md) |  | `any` | The current object in the bubbling phase |
|  [`lastReturnValue`](./decentraland-ecs.observereventstate.lastreturnvalue.md) |  | `any` | This will be populated with the return value of the last function that was executed. If it is the first function in the callback chain it will be the event data. |
|  [`mask`](./decentraland-ecs.observereventstate.mask.md) |  | `number` | Get the mask value that were used to trigger the event corresponding to this EventState object |
|  [`skipNextObservers`](./decentraland-ecs.observereventstate.skipnextobservers.md) |  | `boolean` | An Observer can set this property to true to prevent subsequent observers of being notified |
|  [`target`](./decentraland-ecs.observereventstate.target.md) |  | `any` | The object that originally notified the event |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(mask, skipNextObservers, target, currentTarget)`](./decentraland-ecs.observereventstate.constructor.md) |  |  | Create a new EventState |
|  [`initalize(mask, skipNextObservers, target, currentTarget)`](./decentraland-ecs.observereventstate.initalize.md) |  | `ObserverEventState` | Initialize the current event state |

