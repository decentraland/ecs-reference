[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [LookAtRHToRef](./decentraland-ecs.matrix.lookatrhtoref.md)

# Matrix.LookAtRHToRef method

Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up". This function works in right handed mode

**Signature:**
```javascript
static LookAtRHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eye` | `Vector3` | defines the final position of the entity |
|  `target` | `Vector3` | defines where the entity should look at |
|  `up` | `Vector3` | defines the up vector for the entity |
|  `result` | `Matrix` | defines the target matrix |

