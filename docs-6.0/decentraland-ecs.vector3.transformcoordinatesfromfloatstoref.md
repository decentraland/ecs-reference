[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformCoordinatesFromFloatsToRef](./decentraland-ecs.vector3.transformcoordinatesfromfloatstoref.md)

# Vector3.TransformCoordinatesFromFloatsToRef method

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z) This method computes tranformed coordinates only, not transformed direction vectors

**Signature:**
```javascript
static TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Readonly<Matrix>, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `x` | `number` | define the x coordinate of the source vector |
|  `y` | `number` | define the y coordinate of the source vector |
|  `z` | `number` | define the z coordinate of the source vector |
|  `transformation` | `Readonly<Matrix>` | defines the transformation matrix |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

