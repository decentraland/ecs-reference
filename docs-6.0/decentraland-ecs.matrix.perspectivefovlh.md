[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [PerspectiveFovLH](./decentraland-ecs.matrix.perspectivefovlh.md)

# Matrix.PerspectiveFovLH method

Creates a left-handed perspective projection matrix

**Signature:**
```javascript
static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
```
**Returns:** `Matrix`

a new matrix as a left-handed perspective projection matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `fov` | `number` | defines the horizontal field of view |
|  `aspect` | `number` | defines the aspect ratio |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |

