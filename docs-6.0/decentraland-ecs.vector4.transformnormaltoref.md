[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md) &gt; [TransformNormalToRef](./decentraland-ecs.vector4.transformnormaltoref.md)

# Vector4.TransformNormalToRef method

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector. This methods computes transformed normalized direction vectors only.

**Signature:**
```javascript
static TransformNormalToRef(vector: ReadOnlyVector4, transformation: Matrix, result: Vector4): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector4` | the vector to transform |
|  `transformation` | `Matrix` | the transformation matrix to apply |
|  `result` | `Vector4` | the vector to store the result in |

