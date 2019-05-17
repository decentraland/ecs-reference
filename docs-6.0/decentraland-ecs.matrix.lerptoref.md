[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [LerpToRef](./decentraland-ecs.matrix.lerptoref.md)

# Matrix.LerpToRef method

Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".

**Signature:**
```javascript
static LerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `startValue` | `Matrix` | defines the start value |
|  `endValue` | `Matrix` | defines the end value |
|  `gradient` | `number` | defines the gradient factor |
|  `result` | `Matrix` | defines the Matrix object where to store data |

