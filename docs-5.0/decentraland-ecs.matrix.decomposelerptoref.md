[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [DecomposeLerpToRef](./decentraland-ecs.matrix.decomposelerptoref.md)

# Matrix.DecomposeLerpToRef method

Update a matrix to values which are computed by: \* decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices \* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end \* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices

**Signature:**
```javascript
static DecomposeLerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `startValue` | `Matrix` | defines the first matrix |
|  `endValue` | `Matrix` | defines the second matrix |
|  `gradient` | `number` | defines the gradient between the two matrices |
|  `result` | `Matrix` | defines the target matrix |

