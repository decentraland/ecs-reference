[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationYawPitchRollToRef](./decentraland-ecs.quaternion.rotationyawpitchrolltoref.md)

# Quaternion.RotationYawPitchRollToRef method

Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion

**Signature:**
```javascript
static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `yaw` | `number` | defines the rotation around Y axis |
|  `pitch` | `number` | defines the rotation around X axis |
|  `roll` | `number` | defines the rotation around Z axis |
|  `result` | `Quaternion` | defines the target quaternion |

