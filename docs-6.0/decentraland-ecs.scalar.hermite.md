[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [Hermite](./decentraland-ecs.scalar.hermite.md)

# Scalar.Hermite method

Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2". [http://mathworld.wolfram.com/HermitePolynomial.html](http://mathworld.wolfram.com/HermitePolynomial.html)

**Signature:**
```javascript
static Hermite(value1: number, tangent1: number, value2: number, tangent2: number, amount: number): number;
```
**Returns:** `number`

hermite result

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `number` | spline value |
|  `tangent1` | `number` | spline value |
|  `value2` | `number` | spline value |
|  `tangent2` | `number` | spline value |
|  `amount` | `number` | input value |

