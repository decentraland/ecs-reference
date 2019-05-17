[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [RotationFromAxis](./decentraland-ecs.vector3.rotationfromaxis.md)

# Vector3.RotationFromAxis method

Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system), RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply to something in order to rotate it from its local system to the given target system Note: axis1, axis2 and axis3 are normalized during this operation

**Signature:**
```javascript
static RotationFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Vector3;
```
**Returns:** `Vector3`

a new Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis1` | `Vector3` | defines the first axis |
|  `axis2` | `Vector3` | defines the second axis |
|  `axis3` | `Vector3` | defines the third axis |

