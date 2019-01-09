[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [SlerpToRef](./decentraland-ecs.quaternion.slerptoref.md)

# Quaternion.SlerpToRef method

Interpolates between two quaternions and stores it into a target quaternion

**Signature:**
```javascript
static SlerpToRef(left: Quaternion, right: Quaternion, amount: number, result: Quaternion): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `Quaternion` | defines first quaternion |
|  `right` | `Quaternion` | defines second quaternion |
|  `amount` | `number` | defines the gradient to use |
|  `result` | `Quaternion` | defines the target quaternion |

