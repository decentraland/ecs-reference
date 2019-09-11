<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [InverseLerp](./decentraland-ecs.scalar.inverselerp.md)

## Scalar.InverseLerp() method

Calculates the linear parameter t that produces the interpolant value within the range \[a, b\].

<b>Signature:</b>

```typescript
static InverseLerp(a: number, b: number, value: number): number;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  a | <code>number</code> | start value |
|  b | <code>number</code> | target value |
|  value | <code>number</code> | value between a and b |

<b>Returns:</b>

`number`

the inverseLerp value
