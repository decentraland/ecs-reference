[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [decompose](./decentraland-ecs.matrix.decompose.md)

# Matrix.decompose method

Decomposes the current Matrix into a translation, rotation and scaling components

**Signature:**
```javascript
decompose(scale?: Vector3, rotation?: Quaternion, translation?: Vector3): boolean;
```
**Returns:** `boolean`

true if operation was successful

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `scale` | `Vector3` | defines the scale vector3 given as a reference to update |
|  `rotation` | `Quaternion` | defines the rotation quaternion given as a reference to update |
|  `translation` | `Vector3` | defines the translation vector3 given as a reference to update |

