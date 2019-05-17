[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Plane](./decentraland-ecs.plane.md) &gt; [FromPositionAndNormal](./decentraland-ecs.plane.frompositionandnormal.md)

# Plane.FromPositionAndNormal method

Creates a plane from an origin point and a normal

**Signature:**
```javascript
static FromPositionAndNormal(origin: Vector3, normal: Vector3): Plane;
```
**Returns:** `Plane`

a new Plane the normal vector to this plane at the given origin point. Note : the vector "normal" is updated because normalized.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `origin` | `Vector3` | origin of the plane to be constructed |
|  `normal` | `Vector3` | normal of the plane to be constructed |

