[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md) &gt; [CreateQuadraticBezier](./decentraland-ecs.curve3.createquadraticbezier.md)

# Curve3.CreateQuadraticBezier method

Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#quadratic-bezier-curve

**Signature:**
```javascript
static CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
```
**Returns:** `Curve3`

the created Curve3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `v0` | `Vector3` | (Vector3) the origin point of the Quadratic Bezier |
|  `v1` | `Vector3` | (Vector3) the control point |
|  `v2` | `Vector3` | (Vector3) the end point of the Quadratic Bezier |
|  `nbPoints` | `number` | (integer) the wanted number of points in the curve |

