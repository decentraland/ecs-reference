[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [TransformToRef](./decentraland-ecs.vector2.transformtoref.md)

# Vector2.TransformToRef method

Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates

**Signature:**
```javascript
static TransformToRef(vector: ReadOnlyVector2, transformation: Matrix, result: Vector2): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector2` | defines the vector to transform |
|  `transformation` | `Matrix` | defines the matrix to apply |
|  `result` | `Vector2` | defines the target vector |

