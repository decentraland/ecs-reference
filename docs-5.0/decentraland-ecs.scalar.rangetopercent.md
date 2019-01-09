[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [RangeToPercent](./decentraland-ecs.scalar.rangetopercent.md)

# Scalar.RangeToPercent method

This function returns percentage of a number in a given range.

RangeToPercent(40,20,60) will return 0.5 (50%) RangeToPercent(34,0,100) will return 0.34 (34%)

**Signature:**
```javascript
static RangeToPercent(num: number, min: number, max: number): number;
```
**Returns:** `number`

the percentage

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `num` | `number` | to convert to percentage |
|  `min` | `number` | min range |
|  `max` | `number` | max range |

