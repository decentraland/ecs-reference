[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [PointInTriangle](./decentraland-ecs.vector2.pointintriangle.md)

# Vector2.PointInTriangle method

Determines if a given vector is included in a triangle

**Signature:**
```javascript
static PointInTriangle(p: ReadOnlyVector2, p0: ReadOnlyVector2, p1: ReadOnlyVector2, p2: ReadOnlyVector2): boolean;
```
**Returns:** `boolean`

true if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `p` | `ReadOnlyVector2` | defines the vector to test |
|  `p0` | `ReadOnlyVector2` | defines 1st triangle point |
|  `p1` | `ReadOnlyVector2` | defines 2nd triangle point |
|  `p2` | `ReadOnlyVector2` | defines 3rd triangle point |

