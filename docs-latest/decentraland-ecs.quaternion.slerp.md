[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [Slerp](./decentraland-ecs.quaternion.slerp.md)

# Quaternion.Slerp method

Interpolates between two quaternions

**Signature:**
```javascript
static Slerp(left: ReadOnlyQuaternion, right: ReadOnlyQuaternion, amount: number): Quaternion;
```
**Returns:** `Quaternion`

the new interpolated quaternion

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `ReadOnlyQuaternion` | defines first quaternion |
|  `right` | `ReadOnlyQuaternion` | defines second quaternion |
|  `amount` | `number` | defines the gradient to use |

