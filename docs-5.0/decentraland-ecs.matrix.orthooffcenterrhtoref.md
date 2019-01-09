[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [OrthoOffCenterRHToRef](./decentraland-ecs.matrix.orthooffcenterrhtoref.md)

# Matrix.OrthoOffCenterRHToRef method

Stores a right-handed orthographic projection into a given matrix

**Signature:**
```javascript
static OrthoOffCenterRHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `number` | defines the viewport left coordinate |
|  `right` | `number` | defines the viewport right coordinate |
|  `bottom` | `number` | defines the viewport bottom coordinate |
|  `top` | `number` | defines the viewport top coordinate |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |
|  `result` | `Matrix` | defines the target matrix |

