[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationAxisToRef](./decentraland-ecs.quaternion.rotationaxistoref.md)

# Quaternion.RotationAxisToRef method

Creates a rotation around an axis and stores it into the given quaternion

**Signature:**
```javascript
static RotationAxisToRef(axis: Vector3, angle: number, result: Quaternion): Quaternion;
```
**Returns:** `Quaternion`

the target quaternion

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis` | `Vector3` | defines the axis to use |
|  `angle` | `number` | defines the angle to use (in Euler degrees) |
|  `result` | `Quaternion` | defines the target quaternion |

