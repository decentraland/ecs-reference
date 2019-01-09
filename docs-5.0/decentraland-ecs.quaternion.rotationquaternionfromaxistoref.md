[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationQuaternionFromAxisToRef](./decentraland-ecs.quaternion.rotationquaternionfromaxistoref.md)

# Quaternion.RotationQuaternionFromAxisToRef method

Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion

**Signature:**
```javascript
static RotationQuaternionFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Quaternion): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis1` | `Vector3` | defines the first axis |
|  `axis2` | `Vector3` | defines the second axis |
|  `axis3` | `Vector3` | defines the third axis |
|  `ref` | `Quaternion` | defines the target quaternion |

