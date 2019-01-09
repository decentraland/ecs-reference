[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [Hermite](./decentraland-ecs.quaternion.hermite.md)

# Quaternion.Hermite method

Interpolate between two quaternions using Hermite interpolation

**Signature:**
```javascript
static Hermite(value1: Quaternion, tangent1: Quaternion, value2: Quaternion, tangent2: Quaternion, amount: number): Quaternion;
```
**Returns:** `Quaternion`

the new interpolated quaternion

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `Quaternion` | defines first quaternion |
|  `tangent1` | `Quaternion` | defines the incoming tangent |
|  `value2` | `Quaternion` | defines second quaternion |
|  `tangent2` | `Quaternion` | defines the outgoing tangent |
|  `amount` | `number` | defines the target quaternion |

