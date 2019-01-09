[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [RotationAxisToRef](./decentraland-ecs.matrix.rotationaxistoref.md)

# Matrix.RotationAxisToRef method

Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix

**Signature:**
```javascript
static RotationAxisToRef(axis: Vector3, angle: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis` | `Vector3` | defines the axis to use |
|  `angle` | `number` | defines the angle (in radians) to use |
|  `result` | `Matrix` | defines the target matrix |

