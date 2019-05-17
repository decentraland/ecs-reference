[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observer](./decentraland-ecs.observer.md)

# Observer class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Represent an Observer registered to a given Observable object.

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`_willBeUnregistered`](./decentraland-ecs.observer._willbeunregistered.md) |  | `boolean` | For internal usage |
|  [`callback`](./decentraland-ecs.observer.callback.md) |  | `(eventData: T, eventState: ObserverEventState) => void` | Defines the callback to call when the observer is notified |
|  [`mask`](./decentraland-ecs.observer.mask.md) |  | `number` | Defines the mask of the observer (used to filter notifications) |
|  [`scope`](./decentraland-ecs.observer.scope.md) |  | `any` | Defines the current scope used to restore the JS context |
|  [`unregisterOnNextCall`](./decentraland-ecs.observer.unregisteronnextcall.md) |  | `boolean` | Gets or sets a property defining that the observer as to be unregistered after the next notification |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(callback, mask, scope)`](./decentraland-ecs.observer.constructor.md) |  |  | Creates a new observer |

