[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationQuaternionFromAxis](./decentraland-ecs.quaternion.rotationquaternionfromaxis.md)

# Quaternion.RotationQuaternionFromAxis method

Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)

**Signature:**
```javascript
static RotationQuaternionFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Quaternion;
```
**Returns:** `Quaternion`

the new quaternion

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis1` | `Vector3` | defines the first axis |
|  `axis2` | `Vector3` | defines the second axis |
|  `axis3` | `Vector3` | defines the third axis |

