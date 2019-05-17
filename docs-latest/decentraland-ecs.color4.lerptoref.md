[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color4](./decentraland-ecs.color4.md) &gt; [LerpToRef](./decentraland-ecs.color4.lerptoref.md)

# Color4.LerpToRef method

Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object

**Signature:**
```javascript
static LerpToRef(left: Color4, right: Color4, amount: number, result: Color4): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `Color4` | defines the start value |
|  `right` | `Color4` | defines the end value |
|  `amount` | `number` | defines the gradient factor |
|  `result` | `Color4` | defines the Color4 object where to store data |

