[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [FromXYZAxesToRef](./decentraland-ecs.matrix.fromxyzaxestoref.md)

# Matrix.FromXYZAxesToRef method

Sets the given matrix as a rotation matrix composed from the 3 left handed axes

**Signature:**
```javascript
static FromXYZAxesToRef(xaxis: Vector3, yaxis: Vector3, zaxis: Vector3, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `xaxis` | `Vector3` | defines the value of the 1st axis |
|  `yaxis` | `Vector3` | defines the value of the 2nd axis |
|  `zaxis` | `Vector3` | defines the value of the 3rd axis |
|  `result` | `Matrix` | defines the target matrix |

