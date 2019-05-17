[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md) &gt; [CreateHermiteSpline](./decentraland-ecs.curve3.createhermitespline.md)

# Curve3.CreateHermiteSpline method

Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#hermite-spline

**Signature:**
```javascript
static CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
```
**Returns:** `Curve3`

the created Curve3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `p1` | `Vector3` | (Vector3) the origin point of the Hermite Spline |
|  `t1` | `Vector3` | (Vector3) the tangent vector at the origin point |
|  `p2` | `Vector3` | (Vector3) the end point of the Hermite Spline |
|  `t2` | `Vector3` | (Vector3) the tangent vector at the end point |
|  `nbPoints` | `number` | (integer) the wanted number of points in the curve |

