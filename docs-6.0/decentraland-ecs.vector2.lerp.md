[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [Lerp](./decentraland-ecs.vector2.lerp.md)

# Vector2.Lerp method

Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".

**Signature:**
```javascript
static Lerp(start: ReadOnlyVector2, end: ReadOnlyVector2, amount: number): Vector2;
```
**Returns:** `Vector2`

a new Vector2

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `start` | `ReadOnlyVector2` | defines the start vector |
|  `end` | `ReadOnlyVector2` | defines the end vector |
|  `amount` | `number` | defines the interpolation factor |

