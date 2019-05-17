[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [PerspectiveLH](./decentraland-ecs.matrix.perspectivelh.md)

# Matrix.PerspectiveLH method

Creates a left-handed perspective projection matrix

**Signature:**
```javascript
static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
```
**Returns:** `Matrix`

a new matrix as a left-handed perspective projection matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `width` | `number` | defines the viewport width |
|  `height` | `number` | defines the viewport height |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |

