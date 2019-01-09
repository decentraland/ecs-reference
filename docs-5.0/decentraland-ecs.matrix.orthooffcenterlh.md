[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [OrthoOffCenterLH](./decentraland-ecs.matrix.orthooffcenterlh.md)

# Matrix.OrthoOffCenterLH method

Create a left-handed orthographic projection matrix

**Signature:**
```javascript
static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
```
**Returns:** `Matrix`

a new matrix as a left-handed orthographic projection matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `number` | defines the viewport left coordinate |
|  `right` | `number` | defines the viewport right coordinate |
|  `bottom` | `number` | defines the viewport bottom coordinate |
|  `top` | `number` | defines the viewport top coordinate |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |

