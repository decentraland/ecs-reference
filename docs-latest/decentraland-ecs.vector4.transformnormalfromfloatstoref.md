[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md) &gt; [TransformNormalFromFloatsToRef](./decentraland-ecs.vector4.transformnormalfromfloatstoref.md)

# Vector4.TransformNormalFromFloatsToRef method

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w). This methods computes transformed normalized direction vectors only.

**Signature:**
```javascript
static TransformNormalFromFloatsToRef(x: number, y: number, z: number, w: number, transformation: Matrix, result: Vector4): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `x` | `number` | value to transform |
|  `y` | `number` | value to transform |
|  `z` | `number` | value to transform |
|  `w` | `number` | value to transform |
|  `transformation` | `Matrix` | the transformation matrix to apply |
|  `result` | `Vector4` | the vector to store the results in |

