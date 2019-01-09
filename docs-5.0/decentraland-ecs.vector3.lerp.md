[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [Lerp](./decentraland-ecs.vector3.lerp.md)

# Vector3.Lerp method

Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"

**Signature:**
```javascript
static Lerp(start: ReadOnlyVector3, end: ReadOnlyVector3, amount: number): Vector3;
```
**Returns:** `Vector3`

the new Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `start` | `ReadOnlyVector3` | defines the start value |
|  `end` | `ReadOnlyVector3` | defines the end value |
|  `amount` | `number` | max defines amount between both (between 0 and 1) |

