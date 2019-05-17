[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Input](./decentraland-ecs.input.md) &gt; [unsubscribe](./decentraland-ecs.input.unsubscribe.md)

# Input.unsubscribe method

Removes an existing input event subscription.

**Signature:**
```javascript
unsubscribe(eventName: InputEventKind, fn: (e: LocalPointerEvent) => void): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eventName` | `InputEventKind` | The name of the event (see InputEventKind). |
|  `fn` | `(e: LocalPointerEvent) => void` | The callback function used when subscribing to the event. |

