[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Path3D](./decentraland-ecs.path3d.md)

# Path3D class

Represents a 3D path made up of multiple 3D points

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`path`](./decentraland-ecs.path3d.path.md) |  | `Vector3[]` | an array of Vector3, the curve axis of the Path3D |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(path, firstNormal, raw)`](./decentraland-ecs.path3d.constructor.md) |  |  | new Path3D(path, normal, raw) Creates a Path3D. A Path3D is a logical math object, so not a mesh. please read the description in the tutorial : http://doc.babylonjs.com/tutorials/How\_to\_use\_Path3D |
|  [`getBinormals()`](./decentraland-ecs.path3d.getbinormals.md) |  | `Vector3[]` | Returns an array populated with binormal vectors on each Path3D curve point. |
|  [`getCurve()`](./decentraland-ecs.path3d.getcurve.md) |  | `Vector3[]` | Returns the Path3D array of successive Vector3 designing its curve. |
|  [`getDistances()`](./decentraland-ecs.path3d.getdistances.md) |  | `number[]` | Returns an array populated with distances (float) of the i-th point from the first curve point. |
|  [`getNormals()`](./decentraland-ecs.path3d.getnormals.md) |  | `Vector3[]` | Returns an array populated with normal vectors on each Path3D curve point. |
|  [`getTangents()`](./decentraland-ecs.path3d.gettangents.md) |  | `Vector3[]` | Returns an array populated with tangent vectors on each Path3D curve point. |
|  [`update(path, firstNormal)`](./decentraland-ecs.path3d.update.md) |  | `Path3D` | Forces the Path3D tangent, normal, binormal and distance recomputation. |

