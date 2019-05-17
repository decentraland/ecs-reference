[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Plane](./decentraland-ecs.plane.md) &gt; [SignedDistanceToPlaneFromPositionAndNormal](./decentraland-ecs.plane.signeddistancetoplanefrompositionandnormal.md)

# Plane.SignedDistanceToPlaneFromPositionAndNormal method

Calculates the distance from a plane and a point

**Signature:**
```javascript
static SignedDistanceToPlaneFromPositionAndNormal(origin: Vector3, normal: Vector3, point: Vector3): number;
```
**Returns:** `number`

the signed distance between the plane defined by the normal vector at the "origin"" point and the given other point.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `origin` | `Vector3` | origin of the plane to be constructed |
|  `normal` | `Vector3` | normal of the plane to be constructed |
|  `point` | `Vector3` | point to calculate distance to |

