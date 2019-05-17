[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Path3D](./decentraland-ecs.path3d.md) &gt; [update](./decentraland-ecs.path3d.update.md)

# Path3D.update method

Forces the Path3D tangent, normal, binormal and distance recomputation.

**Signature:**
```javascript
update(path: Vector3[], firstNormal?: Nullable<Vector3>): Path3D;
```
**Returns:** `Path3D`

the same object updated.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `path` | `Vector3[]` | path which all values are copied into the curves points |
|  `firstNormal` | `Nullable<Vector3>` | which should be projected onto the curve |

