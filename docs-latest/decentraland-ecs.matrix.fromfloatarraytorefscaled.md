[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [FromFloatArrayToRefScaled](./decentraland-ecs.matrix.fromfloatarraytorefscaled.md)

# Matrix.FromFloatArrayToRefScaled method

Stores an array into a matrix after having multiplied each component by a given factor

**Signature:**
```javascript
static FromFloatArrayToRefScaled(array: FloatArray, offset: number, scale: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `array` | `FloatArray` | defines the source array |
|  `offset` | `number` | defines the offset in the source array |
|  `scale` | `number` | defines the scaling factor |
|  `result` | `Matrix` | defines the target matrix |

