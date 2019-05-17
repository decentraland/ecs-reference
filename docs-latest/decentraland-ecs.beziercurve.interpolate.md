[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [BezierCurve](./decentraland-ecs.beziercurve.md) &gt; [Interpolate](./decentraland-ecs.beziercurve.interpolate.md)

# BezierCurve.Interpolate method

Returns the cubic Bezier interpolated value (float) at "t" (float) from the given x1, y1, x2, y2 floats

**Signature:**
```javascript
static Interpolate(t: number, x1: number, y1: number, x2: number, y2: number): number;
```
**Returns:** `number`

the interpolated value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `t` | `number` | defines the time |
|  `x1` | `number` | defines the left coordinate on X axis |
|  `y1` | `number` | defines the left coordinate on Y axis |
|  `x2` | `number` | defines the right coordinate on X axis |
|  `y2` | `number` | defines the right coordinate on Y axis |

