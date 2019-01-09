[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [OrthoOffCenterRH](./decentraland-ecs.matrix.orthooffcenterrh.md)

# Matrix.OrthoOffCenterRH method

Creates a right-handed orthographic projection matrix

**Signature:**
```javascript
static OrthoOffCenterRH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
```
**Returns:** `Matrix`

a new matrix as a right-handed orthographic projection matrix

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `number` | defines the viewport left coordinate |
|  `right` | `number` | defines the viewport right coordinate |
|  `bottom` | `number` | defines the viewport bottom coordinate |
|  `top` | `number` | defines the viewport top coordinate |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |

