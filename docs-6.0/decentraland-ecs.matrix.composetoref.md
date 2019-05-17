[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [ComposeToRef](./decentraland-ecs.matrix.composetoref.md)

# Matrix.ComposeToRef method

Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)

**Signature:**
```javascript
static ComposeToRef(scale: Vector3, rotation: Quaternion, translation: Vector3, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `scale` | `Vector3` | defines the scale vector3 |
|  `rotation` | `Quaternion` | defines the rotation quaternion |
|  `translation` | `Vector3` | defines the translation vector3 |
|  `result` | `Matrix` | defines the target matrix |

