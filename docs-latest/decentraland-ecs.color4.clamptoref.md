[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color4](./decentraland-ecs.color4.md) &gt; [clampToRef](./decentraland-ecs.color4.clamptoref.md)

# Color4.clampToRef method

Clamps the rgb values by the min and max values and stores the result into "result"

**Signature:**
```javascript
clampToRef(min: number | undefined, max: number | undefined, result: Color4): Color4;
```
**Returns:** `Color4`

the cuurent Color4

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `min` | `number | undefined` | defines minimum clamping value (default is 0) |
|  `max` | `number | undefined` | defines maximum clamping value (default is 1) |
|  `result` | `Color4` | defines color to store the result into. |

