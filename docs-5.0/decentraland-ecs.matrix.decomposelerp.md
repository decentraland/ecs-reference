[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [DecomposeLerp](./decentraland-ecs.matrix.decomposelerp.md)

# Matrix.DecomposeLerp method

Builds a new matrix whose values are computed by: \* decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices \* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end \* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices

**Signature:**
```javascript
static DecomposeLerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
```
**Returns:** `Matrix`

the new matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `startValue` | `Matrix` | defines the first matrix |
|  `endValue` | `Matrix` | defines the second matrix |
|  `gradient` | `number` | defines the gradient between the two matrices |

