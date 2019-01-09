[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationAlphaBetaGammaToRef](./decentraland-ecs.quaternion.rotationalphabetagammatoref.md)

# Quaternion.RotationAlphaBetaGammaToRef method

Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion

**Signature:**
```javascript
static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `alpha` | `number` | defines the rotation around first axis |
|  `beta` | `number` | defines the rotation around second axis |
|  `gamma` | `number` | defines the rotation around third axis |
|  `result` | `Quaternion` | defines the target quaternion |

