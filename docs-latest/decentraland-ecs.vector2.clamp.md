[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [Clamp](./decentraland-ecs.vector2.clamp.md)

# Vector2.Clamp method

Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max". If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate. If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate

**Signature:**
```javascript
static Clamp(value: ReadOnlyVector2, min: ReadOnlyVector2, max: ReadOnlyVector2): Vector2;
```
**Returns:** `Vector2`

a new Vector2

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value` | `ReadOnlyVector2` | defines the value to clamp |
|  `min` | `ReadOnlyVector2` | defines the lower limit |
|  `max` | `ReadOnlyVector2` | defines the upper limit |

