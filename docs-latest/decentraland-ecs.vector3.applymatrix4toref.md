[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [applyMatrix4ToRef](./decentraland-ecs.vector3.applymatrix4toref.md)

# Vector3.applyMatrix4ToRef method

Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective and set the given vector "result" with this result

**Signature:**
```javascript
applyMatrix4ToRef(matrix: Matrix, result: Vector3): Vector3;
```
**Returns:** `Vector3`

the current Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `matrix` | `Matrix` | The transformation matrix |
|  `result` | `Vector3` | defines the Vector3 object where to store the result |

