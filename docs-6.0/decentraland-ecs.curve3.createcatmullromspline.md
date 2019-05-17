[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md) &gt; [CreateCatmullRomSpline](./decentraland-ecs.curve3.createcatmullromspline.md)

# Curve3.CreateCatmullRomSpline method

Returns a Curve3 object along a CatmullRom Spline curve :

**Signature:**
```javascript
static CreateCatmullRomSpline(points: Vector3[], nbPoints: number, closed?: boolean): Curve3;
```
**Returns:** `Curve3`

the created Curve3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `points` | `Vector3[]` | (array of Vector3) the points the spline must pass through. At least, four points required |
|  `nbPoints` | `number` | (integer) the wanted number of points between each curve control points |
|  `closed` | `boolean` | (boolean) optional with default false, when true forms a closed loop from the points |

