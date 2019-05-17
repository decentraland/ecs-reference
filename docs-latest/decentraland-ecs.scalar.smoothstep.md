[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [SmoothStep](./decentraland-ecs.scalar.smoothstep.md)

# Scalar.SmoothStep method

Interpolates between min and max with smoothing at the limits.

This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.

**Signature:**
```javascript
static SmoothStep(from: number, to: number, tx: number): number;
```
**Returns:** `number`

the smooth stepped value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `from` | `number` | from |
|  `to` | `number` | to |
|  `tx` | `number` | value |

