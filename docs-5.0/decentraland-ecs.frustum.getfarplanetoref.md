[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Frustum](./decentraland-ecs.frustum.md) &gt; [GetFarPlaneToRef](./decentraland-ecs.frustum.getfarplanetoref.md)

# Frustum.GetFarPlaneToRef method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Gets the far frustum plane transformed by the transform matrix

**Signature:**
```javascript
static GetFarPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `transform` | `Matrix` | transformation matrix to be applied to the resulting frustum plane |
|  `frustumPlane` | `Plane` | the resuling frustum plane |

