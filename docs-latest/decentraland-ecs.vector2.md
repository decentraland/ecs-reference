[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md)

# Vector2 class

Class representing a vector containing 2 coordinates

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`x`](./decentraland-ecs.vector2.x.md) |  | `number` | defines the first coordinate |
|  [`y`](./decentraland-ecs.vector2.y.md) |  | `number` | defines the second coordinate |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(x, y)`](./decentraland-ecs.vector2.constructor.md) |  |  | Creates a new Vector2 from the given x and y coordinates |
|  [`add(otherVector)`](./decentraland-ecs.vector2.add.md) |  | `Vector2` | Add another vector with the current one |
|  [`Add(vector1, vector2)`](./decentraland-ecs.vector2.add.md) |  | `Vector2` | Returns a new Vector2 as the result of the addition of the two given vectors. |
|  [`addInPlace(otherVector)`](./decentraland-ecs.vector2.addinplace.md) |  | `Vector2` | Set the Vector2 coordinates by adding the given Vector2 coordinates |
|  [`addToRef(otherVector, result)`](./decentraland-ecs.vector2.addtoref.md) |  | `Vector2` | Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates |
|  [`addVector3(otherVector)`](./decentraland-ecs.vector2.addvector3.md) |  | `Vector2` | Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates |
|  [`asArray()`](./decentraland-ecs.vector2.asarray.md) |  | `number[]` | Copy the current vector to an array |
|  [`CatmullRom(value1, value2, value3, value4, amount)`](./decentraland-ecs.vector2.catmullrom.md) |  | `Vector2` | Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2 |
|  [`Center(value1, value2)`](./decentraland-ecs.vector2.center.md) |  | `Vector2` | Gets a new Vector2 located at the center of the vectors "value1" and "value2" |
|  [`Clamp(value, min, max)`](./decentraland-ecs.vector2.clamp.md) |  | `Vector2` | Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max". If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate. If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate |
|  [`clone()`](./decentraland-ecs.vector2.clone.md) |  | `Vector2` | Gets a new Vector2 copied from the Vector2 |
|  [`copyFrom(source)`](./decentraland-ecs.vector2.copyfrom.md) |  | `Vector2` | Sets the Vector2 coordinates with the given Vector2 coordinates |
|  [`copyFromFloats(x, y)`](./decentraland-ecs.vector2.copyfromfloats.md) |  | `Vector2` | Sets the Vector2 coordinates with the given floats |
|  [`Distance(value1, value2)`](./decentraland-ecs.vector2.distance.md) |  | `number` | Gets the distance between the vectors "value1" and "value2" |
|  [`DistanceOfPointFromSegment(p, segA, segB)`](./decentraland-ecs.vector2.distanceofpointfromsegment.md) |  | `number` | Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB". |
|  [`DistanceSquared(value1, value2)`](./decentraland-ecs.vector2.distancesquared.md) |  | `number` | Returns the squared distance between the vectors "value1" and "value2" |
|  [`divide(otherVector)`](./decentraland-ecs.vector2.divide.md) |  | `Vector2` | Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates |
|  [`divideInPlace(otherVector)`](./decentraland-ecs.vector2.divideinplace.md) |  | `Vector2` | Divides the current Vector2 coordinates by the given ones |
|  [`divideToRef(otherVector, result)`](./decentraland-ecs.vector2.dividetoref.md) |  | `Vector2` | Sets the "result" coordinates with the Vector2 divided by the given one coordinates |
|  [`Dot(left, right)`](./decentraland-ecs.vector2.dot.md) |  | `number` | Gets the dot product of the vector "left" and the vector "right" |
|  [`equals(otherVector)`](./decentraland-ecs.vector2.equals.md) |  | `boolean` | Gets a boolean if two vectors are equals |
|  [`equalsWithEpsilon(otherVector, epsilon)`](./decentraland-ecs.vector2.equalswithepsilon.md) |  | `boolean` | Gets a boolean if two vectors are equals (using an epsilon value) |
|  [`floor()`](./decentraland-ecs.vector2.floor.md) |  | `Vector2` | Gets a new Vector2 from current Vector2 floored values |
|  [`fract()`](./decentraland-ecs.vector2.fract.md) |  | `Vector2` | Gets a new Vector2 from current Vector2 floored values |
|  [`FromArray(array, offset)`](./decentraland-ecs.vector2.fromarray.md) |  | `Vector2` | Gets a new Vector2 set from the given index element of the given array |
|  [`FromArrayToRef(array, offset, result)`](./decentraland-ecs.vector2.fromarraytoref.md) |  | `void` | Sets "result" from the given index element of the given array |
|  [`getClassName()`](./decentraland-ecs.vector2.getclassname.md) |  | `string` | Gets class name |
|  [`getHashCode()`](./decentraland-ecs.vector2.gethashcode.md) |  | `number` | Gets current vector hash code |
|  [`Hermite(value1, tangent1, value2, tangent2, amount)`](./decentraland-ecs.vector2.hermite.md) |  | `Vector2` | Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2" |
|  [`length()`](./decentraland-ecs.vector2.length.md) |  | `number` | Gets the length of the vector |
|  [`lengthSquared()`](./decentraland-ecs.vector2.lengthsquared.md) |  | `number` | Gets the vector squared length |
|  [`Lerp(start, end, amount)`](./decentraland-ecs.vector2.lerp.md) |  | `Vector2` | Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end". |
|  [`Maximize(left, right)`](./decentraland-ecs.vector2.maximize.md) |  | `Vector2` | Gets a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors |
|  [`Minimize(left, right)`](./decentraland-ecs.vector2.minimize.md) |  | `Vector2` | Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors |
|  [`multiply(otherVector)`](./decentraland-ecs.vector2.multiply.md) |  | `Vector2` | Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates |
|  [`multiplyByFloats(x, y)`](./decentraland-ecs.vector2.multiplybyfloats.md) |  | `Vector2` | Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats |
|  [`multiplyInPlace(otherVector)`](./decentraland-ecs.vector2.multiplyinplace.md) |  | `Vector2` | Multiplies in place the current Vector2 coordinates by the given ones |
|  [`multiplyToRef(otherVector, result)`](./decentraland-ecs.vector2.multiplytoref.md) |  | `Vector2` | Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates |
|  [`negate()`](./decentraland-ecs.vector2.negate.md) |  | `Vector2` | Gets a new Vector2 with current Vector2 negated coordinates |
|  [`normalize()`](./decentraland-ecs.vector2.normalize.md) |  | `Vector2` | Normalize the vector |
|  [`Normalize(vector)`](./decentraland-ecs.vector2.normalize.md) |  | `Vector2` | Returns a new Vector2 equal to the normalized given vector |
|  [`One()`](./decentraland-ecs.vector2.one.md) |  | `Vector2` | Gets a new Vector2(1, 1) |
|  [`PointInTriangle(p, p0, p1, p2)`](./decentraland-ecs.vector2.pointintriangle.md) |  | `boolean` | Determines if a given vector is included in a triangle |
|  [`scale(scale)`](./decentraland-ecs.vector2.scale.md) |  | `Vector2` | Returns a new Vector2 scaled by "scale" from the current Vector2 |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.vector2.scaleandaddtoref.md) |  | `Vector2` | Scale the current Vector2 values by a factor and add the result to a given Vector2 |
|  [`scaleInPlace(scale)`](./decentraland-ecs.vector2.scaleinplace.md) |  | `Vector2` | Multiply the Vector2 coordinates by scale |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.vector2.scaletoref.md) |  | `Vector2` | Scale the current Vector2 values by a factor to a given Vector2 |
|  [`set(x, y)`](./decentraland-ecs.vector2.set.md) |  | `Vector2` | Sets the Vector2 coordinates with the given floats |
|  [`subtract(otherVector)`](./decentraland-ecs.vector2.subtract.md) |  | `Vector2` | Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2 |
|  [`subtractInPlace(otherVector)`](./decentraland-ecs.vector2.subtractinplace.md) |  | `Vector2` | Sets the current Vector2 coordinates by subtracting from it the given one coordinates |
|  [`subtractToRef(otherVector, result)`](./decentraland-ecs.vector2.subtracttoref.md) |  | `Vector2` | Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates. |
|  [`toArray(array, index)`](./decentraland-ecs.vector2.toarray.md) |  | `Vector2` | Sets the Vector2 coordinates in the given array or FloatArray from the given index. |
|  [`Transform(vector, transformation)`](./decentraland-ecs.vector2.transform.md) |  | `Vector2` | Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix |
|  [`TransformToRef(vector, transformation, result)`](./decentraland-ecs.vector2.transformtoref.md) |  | `void` | Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates |
|  [`Zero()`](./decentraland-ecs.vector2.zero.md) |  | `Vector2` | Gets a new Vector2(0, 0) |

