[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformCoordinates](./decentraland-ecs.vector3.transformcoordinates.md)

# Vector3.TransformCoordinates method

Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector. This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)

**Signature:**
```javascript
static TransformCoordinates(vector: ReadOnlyVector3, transformation: Matrix): Vector3;
```
**Returns:** `Vector3`

the transformed Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector3` | defines the Vector3 to transform |
|  `transformation` | `Matrix` | defines the transformation matrix |

