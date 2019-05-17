[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Frustum](./decentraland-ecs.frustum.md) &gt; [GetPlanesToRef](./decentraland-ecs.frustum.getplanestoref.md)

# Frustum.GetPlanesToRef method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix.

**Signature:**
```javascript
static GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `transform` | `Matrix` | transformation matrix to be applied to the resulting frustum planes |
|  `frustumPlanes` | `Plane[]` | the resuling frustum planes |

