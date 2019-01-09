[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Input](./decentraland-ecs.input.md) &gt; [subscribe](./decentraland-ecs.input.subscribe.md)

# Input.subscribe method

Subscribes to an input event and triggers the provided callback.

Returns a function that can be called to remove the subscription.

**Signature:**
```javascript
subscribe(eventName: InputEventKind, fn: (e: PointerEvent) => void): () => void;
```
**Returns:** `() => void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eventName` | `InputEventKind` | The name of the event (see InputEventKind). |
|  `fn` | `(e: PointerEvent) => void` | A callback function to be called when the event is triggered. |

