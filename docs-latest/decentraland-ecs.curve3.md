[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md)

# Curve3 class

A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space. A Curve3 is designed from a series of successive Vector3. [https://doc.babylonjs.com/how\_to/how\_to\_use\_curve3](https://doc.babylonjs.com/how_to/how_to_use_curve3)

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(points)`](./decentraland-ecs.curve3.constructor.md) |  |  | A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space. A Curve3 is designed from a series of successive Vector3. [Tutorial](http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object) |
|  [`continue(curve)`](./decentraland-ecs.curve3.continue.md) |  | `Curve3` | Returns a new instance of Curve3 object : var curve = curveA.continue(curveB); This new Curve3 is built by translating and sticking the curveB at the end of the curveA. curveA and curveB keep unchanged. |
|  [`CreateCatmullRomSpline(points, nbPoints, closed)`](./decentraland-ecs.curve3.createcatmullromspline.md) |  | `Curve3` | Returns a Curve3 object along a CatmullRom Spline curve : |
|  [`CreateCubicBezier(v0, v1, v2, v3, nbPoints)`](./decentraland-ecs.curve3.createcubicbezier.md) |  | `Curve3` | Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#cubic-bezier-curve |
|  [`CreateHermiteSpline(p1, t1, p2, t2, nbPoints)`](./decentraland-ecs.curve3.createhermitespline.md) |  | `Curve3` | Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#hermite-spline |
|  [`CreateQuadraticBezier(v0, v1, v2, nbPoints)`](./decentraland-ecs.curve3.createquadraticbezier.md) |  | `Curve3` | Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How\_to\_use\_Curve3\#quadratic-bezier-curve |
|  [`getPoints()`](./decentraland-ecs.curve3.getpoints.md) |  | `Vector3[]` |  |
|  [`length()`](./decentraland-ecs.curve3.length.md) |  | `number` |  |

