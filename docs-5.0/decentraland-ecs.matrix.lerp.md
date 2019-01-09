[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [Lerp](./decentraland-ecs.matrix.lerp.md)

# Matrix.Lerp method

Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".

**Signature:**
```javascript
static Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
```
**Returns:** `Matrix`

the new matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `startValue` | `Matrix` | defines the start value |
|  `endValue` | `Matrix` | defines the end value |
|  `gradient` | `number` | defines the gradient factor |

