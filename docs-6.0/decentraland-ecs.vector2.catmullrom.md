[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [CatmullRom](./decentraland-ecs.vector2.catmullrom.md)

# Vector2.CatmullRom method

Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2

**Signature:**
```javascript
static CatmullRom(value1: ReadOnlyVector2, value2: ReadOnlyVector2, value3: ReadOnlyVector2, value4: ReadOnlyVector2, amount: number): Vector2;
```
**Returns:** `Vector2`

a new Vector2

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `ReadOnlyVector2` | defines 1st point of control |
|  `value2` | `ReadOnlyVector2` | defines 2nd point of control |
|  `value3` | `ReadOnlyVector2` | defines 3rd point of control |
|  `value4` | `ReadOnlyVector2` | defines 4th point of control |
|  `amount` | `number` | defines the interpolation factor |

