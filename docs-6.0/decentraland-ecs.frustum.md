[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Frustum](./decentraland-ecs.frustum.md)

# Frustum class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Reprasents a camera frustum

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`GetBottomPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.getbottomplanetoref.md) |  | `void` | Gets the bottom frustum plane transformed by the transform matrix |
|  [`GetFarPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.getfarplanetoref.md) |  | `void` | Gets the far frustum plane transformed by the transform matrix |
|  [`GetLeftPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.getleftplanetoref.md) |  | `void` | Gets the left frustum plane transformed by the transform matrix |
|  [`GetNearPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.getnearplanetoref.md) |  | `void` | Gets the near frustum plane transformed by the transform matrix |
|  [`GetPlanes(transform)`](./decentraland-ecs.frustum.getplanes.md) |  | `Plane[]` | Gets the planes representing the frustum |
|  [`GetPlanesToRef(transform, frustumPlanes)`](./decentraland-ecs.frustum.getplanestoref.md) |  | `void` | Sets the given array "frustumPlanes" with the 6 Frustum planes computed by the given transformation matrix. |
|  [`GetRightPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.getrightplanetoref.md) |  | `void` | Gets the right frustum plane transformed by the transform matrix |
|  [`GetTopPlaneToRef(transform, frustumPlane)`](./decentraland-ecs.frustum.gettopplanetoref.md) |  | `void` | Gets the top frustum plane transformed by the transform matrix |

