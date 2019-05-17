[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color3](./decentraland-ecs.color3.md) &gt; [clampToRef](./decentraland-ecs.color3.clamptoref.md)

# Color3.clampToRef method

Clamps the rgb values by the min and max values and stores the result into "result"

**Signature:**
```javascript
clampToRef(min: number | undefined, max: number | undefined, result: Color3): Color3;
```
**Returns:** `Color3`

the original Color3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `min` | `number | undefined` | defines minimum clamping value (default is 0) |
|  `max` | `number | undefined` | defines maximum clamping value (default is 1) |
|  `result` | `Color3` | defines color to store the result into |

