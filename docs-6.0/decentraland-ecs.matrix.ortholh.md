[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [OrthoLH](./decentraland-ecs.matrix.ortholh.md)

# Matrix.OrthoLH method

Create a left-handed orthographic projection matrix

**Signature:**
```javascript
static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
```
**Returns:** `Matrix`

a new matrix as a left-handed orthographic projection matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `width` | `number` | defines the viewport width |
|  `height` | `number` | defines the viewport height |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |

