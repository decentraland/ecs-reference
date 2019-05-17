[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformNormalFromFloatsToRef](./decentraland-ecs.vector3.transformnormalfromfloatstoref.md)

# Vector3.TransformNormalFromFloatsToRef method

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z) This methods computes transformed normalized direction vectors only (ie. it does not apply translation)

**Signature:**
```javascript
static TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Readonly<Matrix>, result: Vector3): void;
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

