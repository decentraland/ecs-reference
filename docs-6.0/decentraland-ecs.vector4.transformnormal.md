[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md) &gt; [TransformNormal](./decentraland-ecs.vector4.transformnormal.md)

# Vector4.TransformNormal method

Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector. This methods computes transformed normalized direction vectors only.

**Signature:**
```javascript
static TransformNormal(vector: ReadOnlyVector4, transformation: Matrix): Vector4;
```
**Returns:** `Vector4`

the new vector

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector4` | the vector to transform |
|  `transformation` | `Matrix` | the transformation matrix to apply |

