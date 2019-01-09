[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [Clamp](./decentraland-ecs.scalar.clamp.md)

# Scalar.Clamp method

Returns the value itself if it's between min and max. Returns min if the value is lower than min. Returns max if the value is greater than max.

**Signature:**
```javascript
static Clamp(value: number, min?: number, max?: number): number;
```
**Returns:** `number`

the clamped value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value` | `number` | the value to clmap |
|  `min` | `number` | the min value to clamp to (default: 0) |
|  `max` | `number` | the max value to clamp to (default: 1) |

