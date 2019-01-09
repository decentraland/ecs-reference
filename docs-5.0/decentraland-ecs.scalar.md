[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md)

# Scalar class

Scalar computation library

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`TwoPi`](./decentraland-ecs.scalar.twopi.md) |  | `number` | Two pi constants convenient for computation. |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`Clamp(value, min, max)`](./decentraland-ecs.scalar.clamp.md) |  | `number` | Returns the value itself if it's between min and max. Returns min if the value is lower than min. Returns max if the value is greater than max. |
|  [`DeltaAngle(current, target)`](./decentraland-ecs.scalar.deltaangle.md) |  | `number` | Calculates the shortest difference between two given angles given in degrees. |
|  [`Denormalize(normalized, min, max)`](./decentraland-ecs.scalar.denormalize.md) |  | `number` | Denormalize the value from 0.0 and 1.0 using min and max values |
|  [`Hermite(value1, tangent1, value2, tangent2, amount)`](./decentraland-ecs.scalar.hermite.md) |  | `number` | Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2". [http://mathworld.wolfram.com/HermitePolynomial.html](http://mathworld.wolfram.com/HermitePolynomial.html) |
|  [`InverseLerp(a, b, value)`](./decentraland-ecs.scalar.inverselerp.md) |  | `number` | Calculates the linear parameter t that produces the interpolant value within the range \[a, b\]. |
|  [`Lerp(start, end, amount)`](./decentraland-ecs.scalar.lerp.md) |  | `number` | Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar. |
|  [`LerpAngle(start, end, amount)`](./decentraland-ecs.scalar.lerpangle.md) |  | `number` | Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees. The parameter t is clamped to the range \[0, 1\]. Variables a and b are assumed to be in degrees. |
|  [`Log2(value)`](./decentraland-ecs.scalar.log2.md) |  | `number` | the log2 of value. |
|  [`MoveTowards(current, target, maxDelta)`](./decentraland-ecs.scalar.movetowards.md) |  | `number` | Moves a value current towards target.<p/>This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta. Negative values of maxDelta pushes the value away from target. |
|  [`MoveTowardsAngle(current, target, maxDelta)`](./decentraland-ecs.scalar.movetowardsangle.md) |  | `number` | Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.<p/>Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead. |
|  [`Normalize(value, min, max)`](./decentraland-ecs.scalar.normalize.md) |  | `number` | Normalize the value between 0.0 and 1.0 using min and max values |
|  [`NormalizeRadians(angle)`](./decentraland-ecs.scalar.normalizeradians.md) |  | `number` | Returns the angle converted to equivalent value between -Math.PI and Math.PI radians. |
|  [`PercentToRange(percent, min, max)`](./decentraland-ecs.scalar.percenttorange.md) |  | `number` | This function returns number that corresponds to the percentage in a given range.<p/>PercentToRange(0.34,0,100) will return 34. |
|  [`PingPong(tx, length)`](./decentraland-ecs.scalar.pingpong.md) |  | `number` | PingPongs the value t, so that it is never larger than length and never smaller than 0. |
|  [`RandomRange(min, max)`](./decentraland-ecs.scalar.randomrange.md) |  | `number` | Returns a random float number between and min and max values |
|  [`RangeToPercent(num, min, max)`](./decentraland-ecs.scalar.rangetopercent.md) |  | `number` | This function returns percentage of a number in a given range.<p/>RangeToPercent(40,20,60) will return 0.5 (50%) RangeToPercent(34,0,100) will return 0.34 (34%) |
|  [`Repeat(value, length)`](./decentraland-ecs.scalar.repeat.md) |  | `number` | Loops the value, so that it is never larger than length and never smaller than 0.<p/>This is similar to the modulo operator but it works with floating point numbers. For example, using 3.0 for t and 2.5 for length, the result would be 0.5. With t = 5 and length = 2.5, the result would be 0.0. Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator |
|  [`Sign(value)`](./decentraland-ecs.scalar.sign.md) |  | `number` | Returns -1 if value is negative and +1 is value is positive. |
|  [`SmoothStep(from, to, tx)`](./decentraland-ecs.scalar.smoothstep.md) |  | `number` | Interpolates between min and max with smoothing at the limits.<p/>This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions. |
|  [`ToHex(i)`](./decentraland-ecs.scalar.tohex.md) |  | `string` | Returns a string : the upper case translation of the number i to hexadecimal. |
|  [`WithinEpsilon(a, b, epsilon)`](./decentraland-ecs.scalar.withinepsilon.md) |  | `boolean` | Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45) |

