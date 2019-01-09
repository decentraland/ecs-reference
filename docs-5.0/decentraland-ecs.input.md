[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Input](./decentraland-ecs.input.md)

# Input class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`instance`](./decentraland-ecs.input.instance.md) |  | `Input` |  |
|  [`state`](./decentraland-ecs.input.state.md) |  | `Readonly<InputState>` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor()`](./decentraland-ecs.input.constructor.md) |  |  | Constructs a new instance of the [Input](./decentraland-ecs.input.md) class |
|  [`subscribe(eventName, fn)`](./decentraland-ecs.input.subscribe.md) |  | `() => void` | Subscribes to an input event and triggers the provided callback.<p/>Returns a function that can be called to remove the subscription. |
|  [`unsubscribe(eventName, fn)`](./decentraland-ecs.input.unsubscribe.md) |  | `void` | Removes an existing input event subscription. |

