[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [LerpToRef](./decentraland-ecs.vector3.lerptoref.md)

# Vector3.LerpToRef method

Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"

**Signature:**
```javascript
static LerpToRef(start: ReadOnlyVector3, end: ReadOnlyVector3, amount: number, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `start` | `ReadOnlyVector3` | defines the start value |
|  `end` | `ReadOnlyVector3` | defines the end value |
|  `amount` | `number` | max defines amount between both (between 0 and 1) |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

