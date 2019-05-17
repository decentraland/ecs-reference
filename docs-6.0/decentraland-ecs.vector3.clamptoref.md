[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [ClampToRef](./decentraland-ecs.vector3.clamptoref.md)

# Vector3.ClampToRef method

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max" If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

**Signature:**
```javascript
static ClampToRef(value: ReadOnlyVector3, min: ReadOnlyVector3, max: ReadOnlyVector3, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value` | `ReadOnlyVector3` | defines the current value |
|  `min` | `ReadOnlyVector3` | defines the lower range value |
|  `max` | `ReadOnlyVector3` | defines the upper range value |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

