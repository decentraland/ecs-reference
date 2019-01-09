[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [TransformCoordinatesToRef](./decentraland-ecs.vector3.transformcoordinatestoref.md)

# Vector3.TransformCoordinatesToRef method

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)

**Signature:**
```javascript
static TransformCoordinatesToRef(vector: ReadOnlyVector3, transformation: Readonly<Matrix>, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector` | `ReadOnlyVector3` | defines the Vector3 to transform |
|  `transformation` | `Readonly<Matrix>` | defines the transformation matrix |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

