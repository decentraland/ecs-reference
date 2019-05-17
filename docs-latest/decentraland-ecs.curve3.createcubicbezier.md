[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md) &gt; [CreateCubicBezier](./decentraland-ecs.curve3.createcubicbezier.md)

# Curve3.CreateCubicBezier method

Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#cubic-bezier-curve

**Signature:**
```javascript
static CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
```
**Returns:** `Curve3`

the created Curve3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `v0` | `Vector3` | (Vector3) the origin point of the Cubic Bezier |
|  `v1` | `Vector3` | (Vector3) the first control point |
|  `v2` | `Vector3` | (Vector3) the second control point |
|  `v3` | `Vector3` | (Vector3) the end point of the Cubic Bezier |
|  `nbPoints` | `number` | (integer) the wanted number of points in the curve |

