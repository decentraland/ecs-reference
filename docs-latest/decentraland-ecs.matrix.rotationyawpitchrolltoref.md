[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [RotationYawPitchRollToRef](./decentraland-ecs.matrix.rotationyawpitchrolltoref.md)

# Matrix.RotationYawPitchRollToRef method

Creates a rotation matrix and stores it in a given matrix

**Signature:**
```javascript
static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `yaw` | `number` | defines the yaw angle in radians (Y axis) |
|  `pitch` | `number` | defines the pitch angle in radians (X axis) |
|  `roll` | `number` | defines the roll angle in radians (X axis) |
|  `result` | `Matrix` | defines the target matrix |

