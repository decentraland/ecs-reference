[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Frustum](./decentraland-ecs.frustum.md) &gt; [GetLeftPlaneToRef](./decentraland-ecs.frustum.getleftplanetoref.md)

# Frustum.GetLeftPlaneToRef method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Gets the left frustum plane transformed by the transform matrix

**Signature:**
```javascript
static GetLeftPlaneToRef(transform: Matrix, frustumPlane: Plane): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `transform` | `Matrix` | transformation matrix to be applied to the resulting frustum plane |
|  `frustumPlane` | `Plane` | the resuling frustum plane |

