[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [RotationFromAxisToRef](./decentraland-ecs.vector3.rotationfromaxistoref.md)

# Vector3.RotationFromAxisToRef method

The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3

**Signature:**
```javascript
static RotationFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `axis1` | `Vector3` | defines the first axis |
|  `axis2` | `Vector3` | defines the second axis |
|  `axis3` | `Vector3` | defines the third axis |
|  `ref` | `Vector3` | defines the Vector3 where to store the result |

