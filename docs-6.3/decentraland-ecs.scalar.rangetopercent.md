<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [RangeToPercent](./decentraland-ecs.scalar.rangetopercent.md)

## Scalar.RangeToPercent() method

This function returns percentage of a number in a given range.

RangeToPercent(40,20,60) will return 0.5 (50%) RangeToPercent(34,0,100) will return 0.34 (34%)

<b>Signature:</b>

```typescript
static RangeToPercent(num: number, min: number, max: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  num | <code>number</code> | to convert to percentage |
|  min | <code>number</code> | min range |
|  max | <code>number</code> | max range |

<b>Returns:</b>

`number`

the percentage
