[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationAxis](./decentraland-ecs.quaternion.rotationaxis.md)

# Quaternion.RotationAxis method

Creates a quaternion from a rotation around an axis

**Signature:**
```javascript
static RotationAxis(axis: Vector3, angle: number): Quaternion;
```
**Returns:** `Quaternion`

a new quaternion created from the given axis (Vector3) and angle in radians (float)

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis` | `Vector3` | defines the axis to use |
|  `angle` | `number` | defines the angle to use (in Euler degrees) |

