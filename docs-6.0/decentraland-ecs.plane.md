[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Plane](./decentraland-ecs.plane.md)

# Plane class

Represens a plane by the equation ax + by + cz + d = 0

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`d`](./decentraland-ecs.plane.d.md) |  | `number` | d component of the plane |
|  [`normal`](./decentraland-ecs.plane.normal.md) |  | `Vector3` | Normal of the plane (a,b,c) |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(a, b, c, d)`](./decentraland-ecs.plane.constructor.md) |  |  | Creates a Plane object according to the given floats a, b, c, d and the plane equation : ax + by + cz + d = 0 |
|  [`asArray()`](./decentraland-ecs.plane.asarray.md) |  | `number[]` |  |
|  [`clone()`](./decentraland-ecs.plane.clone.md) |  | `Plane` |  |
|  [`copyFromPoints(point1, point2, point3)`](./decentraland-ecs.plane.copyfrompoints.md) |  | `Plane` | Updates the current Plane from the plane defined by the three given points. |
|  [`dotCoordinate(point)`](./decentraland-ecs.plane.dotcoordinate.md) |  | `number` | Calcualtte the dot product between the point and the plane normal |
|  [`FromArray(array)`](./decentraland-ecs.plane.fromarray.md) |  | `Plane` | Creates a plane from an array |
|  [`FromPoints(point1, point2, point3)`](./decentraland-ecs.plane.frompoints.md) |  | `Plane` | Creates a plane from three points |
|  [`FromPositionAndNormal(origin, normal)`](./decentraland-ecs.plane.frompositionandnormal.md) |  | `Plane` | Creates a plane from an origin point and a normal |
|  [`getClassName()`](./decentraland-ecs.plane.getclassname.md) |  | `string` |  |
|  [`getHashCode()`](./decentraland-ecs.plane.gethashcode.md) |  | `number` |  |
|  [`isFrontFacingTo(direction, epsilon)`](./decentraland-ecs.plane.isfrontfacingto.md) |  | `boolean` | Checks if the plane is facing a given direction |
|  [`normalize()`](./decentraland-ecs.plane.normalize.md) |  | `Plane` | Normalize the current Plane in place. |
|  [`signedDistanceTo(point)`](./decentraland-ecs.plane.signeddistanceto.md) |  | `number` | Calculates the distance to a point |
|  [`SignedDistanceToPlaneFromPositionAndNormal(origin, normal, point)`](./decentraland-ecs.plane.signeddistancetoplanefrompositionandnormal.md) |  | `number` | Calculates the distance from a plane and a point |
|  [`transform(transformation)`](./decentraland-ecs.plane.transform.md) |  | `Plane` | Applies a transformation the plane and returns the result |

