[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md)

# Vector4 class

Vector4 class created for EulerAngle class conversion to Quaternion

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`w`](./decentraland-ecs.vector4.w.md) |  | `number` | w value of the vector |
|  [`x`](./decentraland-ecs.vector4.x.md) |  | `number` | x value of the vector |
|  [`y`](./decentraland-ecs.vector4.y.md) |  | `number` | y value of the vector |
|  [`z`](./decentraland-ecs.vector4.z.md) |  | `number` | z value of the vector |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(x, y, z, w)`](./decentraland-ecs.vector4.constructor.md) |  |  | Creates a Vector4 object from the given floats. |
|  [`add(otherVector)`](./decentraland-ecs.vector4.add.md) |  | `Vector4` | Returns a new Vector4 as the result of the addition of the current Vector4 and the given one. |
|  [`Add(vector1, vector2)`](./decentraland-ecs.vector4.add.md) |  | `Vector4` | Returns a new Vector4 as the result of the addition of the two given vectors. |
|  [`addInPlace(otherVector)`](./decentraland-ecs.vector4.addinplace.md) |  | `Vector4` | Adds the given vector to the current Vector4. |
|  [`addToRef(otherVector, result)`](./decentraland-ecs.vector4.addtoref.md) |  | `Vector4` | Updates the given vector "result" with the result of the addition of the current Vector4 and the given one. |
|  [`asArray()`](./decentraland-ecs.vector4.asarray.md) |  | `number[]` | Returns a new array populated with 4 elements : the Vector4 coordinates. |
|  [`Center(value1, value2)`](./decentraland-ecs.vector4.center.md) |  | `Vector4` | Returns a new Vector4 located at the center between the vectors "value1" and "value2". |
|  [`clone()`](./decentraland-ecs.vector4.clone.md) |  | `Vector4` | Returns a new Vector4 copied from the current one. |
|  [`copyFrom(source)`](./decentraland-ecs.vector4.copyfrom.md) |  | `Vector4` | Updates the current Vector4 with the given one coordinates. |
|  [`copyFromFloats(x, y, z, w)`](./decentraland-ecs.vector4.copyfromfloats.md) |  | `Vector4` | Updates the current Vector4 coordinates with the given floats. |
|  [`Distance(value1, value2)`](./decentraland-ecs.vector4.distance.md) |  | `number` | Returns the distance (float) between the vectors "value1" and "value2". |
|  [`DistanceSquared(value1, value2)`](./decentraland-ecs.vector4.distancesquared.md) |  | `number` | Returns the squared distance (float) between the vectors "value1" and "value2". |
|  [`divide(otherVector)`](./decentraland-ecs.vector4.divide.md) |  | `Vector4` | Returns a new Vector4 set with the division result of the current Vector4 by the given one. |
|  [`divideInPlace(otherVector)`](./decentraland-ecs.vector4.divideinplace.md) |  | `Vector4` | Divides the current Vector3 coordinates by the given ones. |
|  [`divideToRef(otherVector, result)`](./decentraland-ecs.vector4.dividetoref.md) |  | `Vector4` | Updates the given vector "result" with the division result of the current Vector4 by the given one. |
|  [`equals(otherVector)`](./decentraland-ecs.vector4.equals.md) |  | `boolean` | Boolean : True if the current Vector4 coordinates are stricly equal to the given ones. |
|  [`equalsToFloats(x, y, z, w)`](./decentraland-ecs.vector4.equalstofloats.md) |  | `boolean` | Boolean : True if the given floats are strictly equal to the current Vector4 coordinates. |
|  [`equalsWithEpsilon(otherVector, epsilon)`](./decentraland-ecs.vector4.equalswithepsilon.md) |  | `boolean` | Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones. |
|  [`floor()`](./decentraland-ecs.vector4.floor.md) |  | `Vector4` | Gets a new Vector4 from current Vector4 floored values |
|  [`fract()`](./decentraland-ecs.vector4.fract.md) |  | `Vector4` | Gets a new Vector4 from current Vector3 floored values |
|  [`FromArray(array, offset)`](./decentraland-ecs.vector4.fromarray.md) |  | `Vector4` | Returns a new Vector4 set from the starting index of the given array. |
|  [`FromArrayToRef(array, offset, result)`](./decentraland-ecs.vector4.fromarraytoref.md) |  | `void` | Updates the given vector "result" from the starting index of the given array. |
|  [`FromFloatArrayToRef(array, offset, result)`](./decentraland-ecs.vector4.fromfloatarraytoref.md) |  | `void` | Updates the given vector "result" from the starting index of the given FloatArray. |
|  [`FromFloatsToRef(x, y, z, w, result)`](./decentraland-ecs.vector4.fromfloatstoref.md) |  | `void` | Updates the given vector "result" coordinates from the given floats. |
|  [`getClassName()`](./decentraland-ecs.vector4.getclassname.md) |  | `string` | Returns the string "Vector4". |
|  [`getHashCode()`](./decentraland-ecs.vector4.gethashcode.md) |  | `number` | Returns the Vector4 hash code. |
|  [`length()`](./decentraland-ecs.vector4.length.md) |  | `number` | Returns the Vector4 length (float). |
|  [`lengthSquared()`](./decentraland-ecs.vector4.lengthsquared.md) |  | `number` | Returns the Vector4 squared length (float). |
|  [`Maximize(left, right)`](./decentraland-ecs.vector4.maximize.md) |  | `Vector4` | Returns a vector with the maximum values from the left and right vectors |
|  [`maximizeInPlace(other)`](./decentraland-ecs.vector4.maximizeinplace.md) |  | `Vector4` | Updates the Vector4 coordinates with the maximum values between its own and the given vector ones |
|  [`Minimize(left, right)`](./decentraland-ecs.vector4.minimize.md) |  | `Vector4` | Returns a vector with the minimum values from the left and right vectors |
|  [`minimizeInPlace(other)`](./decentraland-ecs.vector4.minimizeinplace.md) |  | `Vector4` | Updates the Vector4 coordinates with the minimum values between its own and the given vector ones |
|  [`multiply(otherVector)`](./decentraland-ecs.vector4.multiply.md) |  | `Vector4` | Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one. |
|  [`multiplyByFloats(x, y, z, w)`](./decentraland-ecs.vector4.multiplybyfloats.md) |  | `Vector4` | Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates. |
|  [`multiplyInPlace(otherVector)`](./decentraland-ecs.vector4.multiplyinplace.md) |  | `Vector4` | Multiplies in place the current Vector4 by the given one. |
|  [`multiplyToRef(otherVector, result)`](./decentraland-ecs.vector4.multiplytoref.md) |  | `Vector4` | Updates the given vector "result" with the multiplication result of the current Vector4 and the given one. |
|  [`negate()`](./decentraland-ecs.vector4.negate.md) |  | `Vector4` | Returns a new Vector4 set with the current Vector4 negated coordinates. |
|  [`normalize()`](./decentraland-ecs.vector4.normalize.md) |  | `Vector4` | Normalizes in place the Vector4. |
|  [`Normalize(vector)`](./decentraland-ecs.vector4.normalize.md) |  | `Vector4` | Returns a new normalized Vector4 from the given one. |
|  [`NormalizeToRef(vector, result)`](./decentraland-ecs.vector4.normalizetoref.md) |  | `void` | Updates the given vector "result" from the normalization of the given one. |
|  [`One()`](./decentraland-ecs.vector4.one.md) |  | `Vector4` | Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0) |
|  [`scale(scale)`](./decentraland-ecs.vector4.scale.md) |  | `Vector4` | Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float). |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.vector4.scaleandaddtoref.md) |  | `Vector4` | Scale the current Vector4 values by a factor and add the result to a given Vector4 |
|  [`scaleInPlace(scale)`](./decentraland-ecs.vector4.scaleinplace.md) |  | `Vector4` | Multiplies the current Vector4 coordinates by scale (float). |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.vector4.scaletoref.md) |  | `Vector4` | Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float). |
|  [`set(x, y, z, w)`](./decentraland-ecs.vector4.set.md) |  | `Vector4` | Updates the current Vector4 coordinates with the given floats. |
|  [`setAll(v)`](./decentraland-ecs.vector4.setall.md) |  | `Vector4` | Copies the given float to the current Vector3 coordinates |
|  [`subtract(otherVector)`](./decentraland-ecs.vector4.subtract.md) |  | `Vector4` | Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4. |
|  [`subtractFromFloats(x, y, z, w)`](./decentraland-ecs.vector4.subtractfromfloats.md) |  | `Vector4` | Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates. |
|  [`subtractFromFloatsToRef(x, y, z, w, result)`](./decentraland-ecs.vector4.subtractfromfloatstoref.md) |  | `Vector4` | Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates. |
|  [`subtractInPlace(otherVector)`](./decentraland-ecs.vector4.subtractinplace.md) |  | `Vector4` | Subtract in place the given vector from the current Vector4. |
|  [`subtractToRef(otherVector, result)`](./decentraland-ecs.vector4.subtracttoref.md) |  | `Vector4` | Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4. |
|  [`toArray(array, index)`](./decentraland-ecs.vector4.toarray.md) |  | `Vector4` | Populates the given array from the given index with the Vector4 coordinates. |
|  [`toVector3()`](./decentraland-ecs.vector4.tovector3.md) |  | `Vector3` | Returns a new Vector3 from the Vector4 (x, y, z) coordinates. |
|  [`TransformNormal(vector, transformation)`](./decentraland-ecs.vector4.transformnormal.md) |  | `Vector4` | Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector. This methods computes transformed normalized direction vectors only. |
|  [`TransformNormalFromFloatsToRef(x, y, z, w, transformation, result)`](./decentraland-ecs.vector4.transformnormalfromfloatstoref.md) |  | `void` | Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w). This methods computes transformed normalized direction vectors only. |
|  [`TransformNormalToRef(vector, transformation, result)`](./decentraland-ecs.vector4.transformnormaltoref.md) |  | `void` | Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector. This methods computes transformed normalized direction vectors only. |
|  [`Zero()`](./decentraland-ecs.vector4.zero.md) |  | `Vector4` | Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0) |

