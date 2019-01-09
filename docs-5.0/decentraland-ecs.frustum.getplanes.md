[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Frustum](./decentraland-ecs.frustum.md) &gt; [GetPlanes](./decentraland-ecs.frustum.getplanes.md)

# Frustum.GetPlanes method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Gets the planes representing the frustum

**Signature:**
```javascript
static GetPlanes(transform: Matrix): Plane[];
```
**Returns:** `Plane[]`

a new array of 6 Frustum planes computed by the given transformation matrix.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `transform` | `Matrix` | matrix to be applied to the returned planes |

