[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [Hermite](./decentraland-ecs.vector2.hermite.md)

# Vector2.Hermite method

Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2"

**Signature:**
```javascript
static Hermite(value1: ReadOnlyVector2, tangent1: ReadOnlyVector2, value2: ReadOnlyVector2, tangent2: ReadOnlyVector2, amount: number): Vector2;
```
**Returns:** `Vector2`

a new Vector2

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `ReadOnlyVector2` | defines the 1st control point |
|  `tangent1` | `ReadOnlyVector2` | defines the outgoing tangent |
|  `value2` | `ReadOnlyVector2` | defines the 2nd control point |
|  `tangent2` | `ReadOnlyVector2` | defines the incoming tangent |
|  `amount` | `number` | defines the interpolation factor |

