[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [multiplyToArray](./decentraland-ecs.matrix.multiplytoarray.md)

# Matrix.multiplyToArray method

Sets the FloatArray "result" from the given index "offset" with the multiplication of the current matrix and the given one

**Signature:**
```javascript
multiplyToArray(other: Readonly<Matrix>, result: FloatArray, offset: number): Matrix;
```
**Returns:** `Matrix`

the current matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `other` | `Readonly<Matrix>` | defines the second operand |
|  `result` | `FloatArray` | defines the array where to store the multiplication |
|  `offset` | `number` | defines the offset in the target array where to start storing values |

