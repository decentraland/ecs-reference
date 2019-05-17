[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformNormalToRef](./decentraland-ecs.vector3.transformnormaltoref.md)

# Vector3.TransformNormalToRef method

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector This methods computes transformed normalized direction vectors only (ie. it does not apply translation)

**Signature:**
```javascript
static TransformNormalToRef(vector: ReadOnlyVector3, transformation: Readonly<Matrix>, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector3` | defines the Vector3 to transform |
|  `transformation` | `Readonly<Matrix>` | defines the transformation matrix |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

