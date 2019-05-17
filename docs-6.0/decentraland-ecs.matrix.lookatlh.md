[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [LookAtLH](./decentraland-ecs.matrix.lookatlh.md)

# Matrix.LookAtLH method

Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up" This function works in left handed mode

**Signature:**
```javascript
static LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
```
**Returns:** `Matrix`

the new matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `eye` | `Vector3` | defines the final position of the entity |
|  `target` | `Vector3` | defines where the entity should look at |
|  `up` | `Vector3` | defines the up vector for the entity |

