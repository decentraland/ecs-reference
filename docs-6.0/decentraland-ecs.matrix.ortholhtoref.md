[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [OrthoLHToRef](./decentraland-ecs.matrix.ortholhtoref.md)

# Matrix.OrthoLHToRef method

Store a left-handed orthographic projection to a given matrix

**Signature:**
```javascript
static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `width` | `number` | defines the viewport width |
|  `height` | `number` | defines the viewport height |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |
|  `result` | `Matrix` | defines the target matrix |

