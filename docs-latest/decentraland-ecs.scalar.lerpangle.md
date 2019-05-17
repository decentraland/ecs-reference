[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [LerpAngle](./decentraland-ecs.scalar.lerpangle.md)

# Scalar.LerpAngle method

Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees. The parameter t is clamped to the range \[0, 1\]. Variables a and b are assumed to be in degrees.

**Signature:**
```javascript
static LerpAngle(start: number, end: number, amount: number): number;
```
**Returns:** `number`

the lerped value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `start` | `number` | start value |
|  `end` | `number` | target value |
|  `amount` | `number` | amount to lerp between |

