[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [MoveTowardsAngle](./decentraland-ecs.scalar.movetowardsangle.md)

# Scalar.MoveTowardsAngle method

Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.

Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.

**Signature:**
```javascript
static MoveTowardsAngle(current: number, target: number, maxDelta: number): number;
```
**Returns:** `number`

resulting angle

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `current` | `number` | current value |
|  `target` | `number` | target value |
|  `maxDelta` | `number` | max distance to move |

