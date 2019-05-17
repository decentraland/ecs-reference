[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [Hermite](./decentraland-ecs.quaternion.hermite.md)

# Quaternion.Hermite method

Interpolate between two quaternions using Hermite interpolation

**Signature:**
```javascript
static Hermite(value1: ReadOnlyQuaternion, tangent1: ReadOnlyQuaternion, value2: ReadOnlyQuaternion, tangent2: ReadOnlyQuaternion, amount: number): Quaternion;
```
**Returns:** `Quaternion`

the new interpolated quaternion

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `ReadOnlyQuaternion` | defines first quaternion |
|  `tangent1` | `ReadOnlyQuaternion` | defines the incoming tangent |
|  `value2` | `ReadOnlyQuaternion` | defines second quaternion |
|  `tangent2` | `ReadOnlyQuaternion` | defines the outgoing tangent |
|  `amount` | `number` | defines the target quaternion |

