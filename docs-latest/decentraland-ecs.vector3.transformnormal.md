[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformNormal](./decentraland-ecs.vector3.transformnormal.md)

# Vector3.TransformNormal method

Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector This methods computes transformed normalized direction vectors only (ie. it does not apply translation)

**Signature:**
```javascript
static TransformNormal(vector: ReadOnlyVector3, transformation: Matrix): Vector3;
```
**Returns:** `Vector3`

the new Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector3` | defines the Vector3 to transform |
|  `transformation` | `Matrix` | defines the transformation matrix |

