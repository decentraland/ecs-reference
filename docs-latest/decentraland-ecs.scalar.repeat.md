[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [Repeat](./decentraland-ecs.scalar.repeat.md)

# Scalar.Repeat method

Loops the value, so that it is never larger than length and never smaller than 0.

This is similar to the modulo operator but it works with floating point numbers. For example, using 3.0 for t and 2.5 for length, the result would be 0.5. With t = 5 and length = 2.5, the result would be 0.0. Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator

**Signature:**
```javascript
static Repeat(value: number, length: number): number;
```
**Returns:** `number`

the looped value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value` | `number` | the value |
|  `length` | `number` | the length |

