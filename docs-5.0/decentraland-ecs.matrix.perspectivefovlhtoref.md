[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [PerspectiveFovLHToRef](./decentraland-ecs.matrix.perspectivefovlhtoref.md)

# Matrix.PerspectiveFovLHToRef method

Stores a left-handed perspective projection into a given matrix

**Signature:**
```javascript
static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `fov` | `number` | defines the horizontal field of view |
|  `aspect` | `number` | defines the aspect ratio |
|  `znear` | `number` | defines the near clip plane |
|  `zfar` | `number` | defines the far clip plane |
|  `result` | `Matrix` | defines the target matrix |
|  `isVerticalFovFixed` | `boolean` | defines it the fov is vertically fixed (default) or horizontally |

