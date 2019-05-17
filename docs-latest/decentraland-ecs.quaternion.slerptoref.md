[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [SlerpToRef](./decentraland-ecs.quaternion.slerptoref.md)

# Quaternion.SlerpToRef method

Interpolates between two quaternions and stores it into a target quaternion

**Signature:**
```javascript
static SlerpToRef(left: ReadOnlyQuaternion, right: ReadOnlyQuaternion, amount: number, result: Quaternion): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `ReadOnlyQuaternion` | defines first quaternion |
|  `right` | `ReadOnlyQuaternion` | defines second quaternion |
|  `amount` | `number` | defines the gradient to use |
|  `result` | `Quaternion` | defines the target quaternion |

