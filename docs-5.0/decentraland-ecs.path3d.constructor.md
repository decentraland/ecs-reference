[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Path3D](./decentraland-ecs.path3d.md) &gt; [constructor](./decentraland-ecs.path3d.constructor.md)

# Path3D.constructor method

new Path3D(path, normal, raw) Creates a Path3D. A Path3D is a logical math object, so not a mesh. please read the description in the tutorial : http://doc.babylonjs.com/tutorials/How\_to\_use\_Path3D

**Signature:**
```javascript
constructor(
    path: Vector3[], firstNormal?: Nullable<Vector3>, raw?: boolean);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `Vector3[]` | an array of Vector3, the curve axis of the Path3D |
|  `firstNormal` | `Nullable<Vector3>` |  |
|  `raw` | `boolean` | (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed. |

