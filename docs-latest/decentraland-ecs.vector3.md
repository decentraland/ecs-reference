[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md)

# Vector3 class

Classed used to store (x,y,z) vector representation A Vector3 is the main object used in 3D geometry It can represent etiher the coordinates of a point the space, either a direction Reminder: Babylon.js uses a left handed forward facing system

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`isNonUniform`](./decentraland-ecs.vector3.isnonuniform.md) |  | `boolean` | Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same |
|  [`x`](./decentraland-ecs.vector3.x.md) |  | `number` | Defines the first coordinates (on X axis) |
|  [`y`](./decentraland-ecs.vector3.y.md) |  | `number` | Defines the second coordinates (on Y axis) |
|  [`z`](./decentraland-ecs.vector3.z.md) |  | `number` | Defines the third coordinates (on Z axis) |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(x, y, z)`](./decentraland-ecs.vector3.constructor.md) |  |  | Creates a new Vector3 object from the given x, y, z (floats) coordinates. |
|  [`add(otherVector)`](./decentraland-ecs.vector3.add.md) |  | `Vector3` | Gets a new Vector3, result of the addition the current Vector3 and the given vector |
|  [`Add(vector1, vector2)`](./decentraland-ecs.vector3.add.md) |  | `Vector3` | Returns a new Vector3 as the result of the addition of the two given vectors. |
|  [`addInPlace(otherVector)`](./decentraland-ecs.vector3.addinplace.md) |  | `Vector3` | Adds the given vector to the current Vector3 |
|  [`addInPlaceFromFloats(x, y, z)`](./decentraland-ecs.vector3.addinplacefromfloats.md) |  | `Vector3` | Adds the given coordinates to the current Vector3 |
|  [`addToRef(otherVector, result)`](./decentraland-ecs.vector3.addtoref.md) |  | `Vector3` | Adds the current Vector3 to the given one and stores the result in the vector "result" |
|  [`applyMatrix4(matrix)`](./decentraland-ecs.vector3.applymatrix4.md) |  | `void` | Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective |
|  [`applyMatrix4ToRef(matrix, result)`](./decentraland-ecs.vector3.applymatrix4toref.md) |  | `Vector3` | Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective and set the given vector "result" with this result |
|  [`asArray()`](./decentraland-ecs.vector3.asarray.md) |  | `number[]` | Creates an array containing three elements : the coordinates of the Vector3 |
|  [`Backward()`](./decentraland-ecs.vector3.backward.md) |  | `Vector3` | Returns a new Vector3 set to (0.0, 0.0, -1.0) |
|  [`CatmullRom(value1, value2, value3, value4, amount)`](./decentraland-ecs.vector3.catmullrom.md) |  | `Vector3` | Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4" |
|  [`Center(value1, value2)`](./decentraland-ecs.vector3.center.md) |  | `Vector3` | Returns a new Vector3 located at the center between "value1" and "value2" |
|  [`Clamp(value, min, max)`](./decentraland-ecs.vector3.clamp.md) |  | `Vector3` | Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max" If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one |
|  [`ClampToRef(value, min, max, result)`](./decentraland-ecs.vector3.clamptoref.md) |  | `void` | Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max" If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one |
|  [`clone()`](./decentraland-ecs.vector3.clone.md) |  | `Vector3` | Creates a new Vector3 copied from the current Vector3 |
|  [`copyFrom(source)`](./decentraland-ecs.vector3.copyfrom.md) |  | `Vector3` | Copies the given vector coordinates to the current Vector3 ones |
|  [`copyFromFloats(x, y, z)`](./decentraland-ecs.vector3.copyfromfloats.md) |  | `Vector3` | Copies the given floats to the current Vector3 coordinates |
|  [`Cross(left, right)`](./decentraland-ecs.vector3.cross.md) |  | `Vector3` | Returns a new Vector3 as the cross product of the vectors "left" and "right" The cross product is then orthogonal to both "left" and "right" |
|  [`CrossToRef(left, right, result)`](./decentraland-ecs.vector3.crosstoref.md) |  | `void` | Sets the given vector "result" with the cross product of "left" and "right" The cross product is then orthogonal to both "left" and "right" |
|  [`Distance(value1, value2)`](./decentraland-ecs.vector3.distance.md) |  | `number` | Returns the distance between the vectors "value1" and "value2" |
|  [`DistanceSquared(value1, value2)`](./decentraland-ecs.vector3.distancesquared.md) |  | `number` | Returns the squared distance between the vectors "value1" and "value2" |
|  [`divide(otherVector)`](./decentraland-ecs.vector3.divide.md) |  | `Vector3` | Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones |
|  [`divideInPlace(otherVector)`](./decentraland-ecs.vector3.divideinplace.md) |  | `Vector3` | Divides the current Vector3 coordinates by the given ones. |
|  [`divideToRef(otherVector, result)`](./decentraland-ecs.vector3.dividetoref.md) |  | `Vector3` | Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result" |
|  [`Dot(left, right)`](./decentraland-ecs.vector3.dot.md) |  | `number` | Returns the dot product (float) between the vectors "left" and "right" |
|  [`Down()`](./decentraland-ecs.vector3.down.md) |  | `Vector3` | Returns a new Vector3 set to (0.0, -1.0, 0.0) |
|  [`equals(otherVector)`](./decentraland-ecs.vector3.equals.md) |  | `boolean` | Returns true if the current Vector3 and the given vector coordinates are strictly equal |
|  [`equalsToFloats(x, y, z)`](./decentraland-ecs.vector3.equalstofloats.md) |  | `boolean` | Returns true if the current Vector3 coordinates equals the given floats |
|  [`equalsWithEpsilon(otherVector, epsilon)`](./decentraland-ecs.vector3.equalswithepsilon.md) |  | `boolean` | Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon |
|  [`floor()`](./decentraland-ecs.vector3.floor.md) |  | `Vector3` | Gets a new Vector3 from current Vector3 floored values |
|  [`Forward()`](./decentraland-ecs.vector3.forward.md) |  | `Vector3` | Returns a new Vector3 set to (0.0, 0.0, 1.0) |
|  [`fract()`](./decentraland-ecs.vector3.fract.md) |  | `Vector3` | Gets a new Vector3 from current Vector3 floored values |
|  [`FromArray(array, offset)`](./decentraland-ecs.vector3.fromarray.md) |  | `Vector3` | Returns a new Vector3 set from the index "offset" of the given array |
|  [`FromArrayToRef(array, offset, result)`](./decentraland-ecs.vector3.fromarraytoref.md) |  | `void` | Sets the given vector "result" with the element values from the index "offset" of the given array |
|  [`FromFloatArray(array, offset)`](./decentraland-ecs.vector3.fromfloatarray.md) |  | `Vector3` | Returns a new Vector3 set from the index "offset" of the given FloatArray This function is deprecated. Use FromArray instead |
|  [`FromFloatArrayToRef(array, offset, result)`](./decentraland-ecs.vector3.fromfloatarraytoref.md) |  | `void` | Sets the given vector "result" with the element values from the index "offset" of the given FloatArray This function is deprecated. Use FromArrayToRef instead. |
|  [`FromFloatsToRef(x, y, z, result)`](./decentraland-ecs.vector3.fromfloatstoref.md) |  | `void` | Sets the given vector "result" with the given floats. |
|  [`GetAngleBetweenVectors(vector0, vector1, normal)`](./decentraland-ecs.vector3.getanglebetweenvectors.md) |  | `number` | Get angle between two vectors |
|  [`getClassName()`](./decentraland-ecs.vector3.getclassname.md) |  | `string` | Gets the class name |
|  [`GetClipFactor(vector0, vector1, axis, size)`](./decentraland-ecs.vector3.getclipfactor.md) |  | `number` | Get the clip factor between two vectors |
|  [`getHashCode()`](./decentraland-ecs.vector3.gethashcode.md) |  | `number` | Creates the Vector3 hash code |
|  [`Hermite(value1, tangent1, value2, tangent2, amount)`](./decentraland-ecs.vector3.hermite.md) |  | `Vector3` | Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2" |
|  [`Left()`](./decentraland-ecs.vector3.left.md) |  | `Vector3` | Returns a new Vector3 set to (-1.0, 0.0, 0.0) |
|  [`length()`](./decentraland-ecs.vector3.length.md) |  | `number` | Gets the length of the Vector3 |
|  [`lengthSquared()`](./decentraland-ecs.vector3.lengthsquared.md) |  | `number` | Gets the squared length of the Vector3 |
|  [`Lerp(start, end, amount)`](./decentraland-ecs.vector3.lerp.md) |  | `Vector3` | Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end" |
|  [`LerpToRef(start, end, amount, result)`](./decentraland-ecs.vector3.lerptoref.md) |  | `void` | Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end" |
|  [`Maximize(left, right)`](./decentraland-ecs.vector3.maximize.md) |  | `Vector3` | Gets the maximal coordinate values between two Vector3 |
|  [`maximizeInPlace(other)`](./decentraland-ecs.vector3.maximizeinplace.md) |  | `Vector3` | Updates the current Vector3 with the maximal coordinate values between its and the given vector ones. |
|  [`maximizeInPlaceFromFloats(x, y, z)`](./decentraland-ecs.vector3.maximizeinplacefromfloats.md) |  | `Vector3` | Updates the current Vector3 with the maximal coordinate values between its and the given coordinates. |
|  [`Minimize(left, right)`](./decentraland-ecs.vector3.minimize.md) |  | `Vector3` | Gets the minimal coordinate values between two Vector3 |
|  [`minimizeInPlace(other)`](./decentraland-ecs.vector3.minimizeinplace.md) |  | `Vector3` | Updates the current Vector3 with the minimal coordinate values between its and the given vector ones |
|  [`minimizeInPlaceFromFloats(x, y, z)`](./decentraland-ecs.vector3.minimizeinplacefromfloats.md) |  | `Vector3` | Updates the current Vector3 with the minimal coordinate values between its and the given coordinates |
|  [`multiply(otherVector)`](./decentraland-ecs.vector3.multiply.md) |  | `Vector3` | Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector |
|  [`multiplyByFloats(x, y, z)`](./decentraland-ecs.vector3.multiplybyfloats.md) |  | `Vector3` | Returns a new Vector3 set with the result of the mulliplication of the current Vector3 coordinates by the given floats |
|  [`multiplyInPlace(otherVector)`](./decentraland-ecs.vector3.multiplyinplace.md) |  | `Vector3` | Multiplies the current Vector3 coordinates by the given ones |
|  [`multiplyToRef(otherVector, result)`](./decentraland-ecs.vector3.multiplytoref.md) |  | `Vector3` | Multiplies the current Vector3 by the given one and stores the result in the given vector "result" |
|  [`negate()`](./decentraland-ecs.vector3.negate.md) |  | `Vector3` | Gets a new Vector3 set with the current Vector3 negated coordinates |
|  [`normalize()`](./decentraland-ecs.vector3.normalize.md) |  | `Vector3` | Normalize the current Vector3. Please note that this is an in place operation. |
|  [`Normalize(vector)`](./decentraland-ecs.vector3.normalize.md) |  | `Vector3` | Returns a new Vector3 as the normalization of the given vector |
|  [`normalizeFromLength(len)`](./decentraland-ecs.vector3.normalizefromlength.md) |  | `Vector3` | Normalize the current Vector3 with the given input length. Please note that this is an in place operation. |
|  [`normalizeToNew()`](./decentraland-ecs.vector3.normalizetonew.md) |  | `Vector3` | Normalize the current Vector3 to a new vector |
|  [`normalizeToRef(reference)`](./decentraland-ecs.vector3.normalizetoref.md) |  | `Vector3` | Normalize the current Vector3 to the reference |
|  [`NormalizeToRef(vector, result)`](./decentraland-ecs.vector3.normalizetoref.md) |  | `void` | Sets the given vector "result" with the normalization of the given first vector |
|  [`One()`](./decentraland-ecs.vector3.one.md) |  | `Vector3` | Returns a new Vector3 set to (1.0, 1.0, 1.0) |
|  [`Right()`](./decentraland-ecs.vector3.right.md) |  | `Vector3` | Returns a new Vector3 set to (1.0, 0.0, 0.0) |
|  [`rotate(q)`](./decentraland-ecs.vector3.rotate.md) |  | `Vector3` | Rotates the current Vector3 based on the given quaternion |
|  [`rotateToRef(q, result)`](./decentraland-ecs.vector3.rotatetoref.md) |  | `Vector3` | Rotates current Vector3 based on the given quaternion, but applies the rotation to target Vector3. |
|  [`RotationFromAxis(axis1, axis2, axis3)`](./decentraland-ecs.vector3.rotationfromaxis.md) |  | `Vector3` | Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system), RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply to something in order to rotate it from its local system to the given target system Note: axis1, axis2 and axis3 are normalized during this operation |
|  [`RotationFromAxisToRef(axis1, axis2, axis3, ref)`](./decentraland-ecs.vector3.rotationfromaxistoref.md) |  | `void` | The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3 |
|  [`scale(scale)`](./decentraland-ecs.vector3.scale.md) |  | `Vector3` | Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale" |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.vector3.scaleandaddtoref.md) |  | `Vector3` | Scale the current Vector3 values by a factor and add the result to a given Vector3 |
|  [`scaleInPlace(scale)`](./decentraland-ecs.vector3.scaleinplace.md) |  | `Vector3` | Multiplies the Vector3 coordinates by the float "scale" |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.vector3.scaletoref.md) |  | `Vector3` | Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates |
|  [`set(x, y, z)`](./decentraland-ecs.vector3.set.md) |  | `Vector3` | Copies the given floats to the current Vector3 coordinates |
|  [`setAll(v)`](./decentraland-ecs.vector3.setall.md) |  | `Vector3` | Copies the given float to the current Vector3 coordinates |
|  [`subtract(otherVector)`](./decentraland-ecs.vector3.subtract.md) |  | `Vector3` | Returns a new Vector3, result of the subtraction of the given vector from the current Vector3 |
|  [`subtractFromFloats(x, y, z)`](./decentraland-ecs.vector3.subtractfromfloats.md) |  | `Vector3` | Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates |
|  [`subtractFromFloatsToRef(x, y, z, result)`](./decentraland-ecs.vector3.subtractfromfloatstoref.md) |  | `Vector3` | Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result |
|  [`subtractInPlace(otherVector)`](./decentraland-ecs.vector3.subtractinplace.md) |  | `Vector3` | Subtract the given vector from the current Vector3 |
|  [`subtractToRef(otherVector, result)`](./decentraland-ecs.vector3.subtracttoref.md) |  | `Vector3` | Subtracts the given vector from the current Vector3 and stores the result in the vector "result". |
|  [`toArray(array, index)`](./decentraland-ecs.vector3.toarray.md) |  | `Vector3` | Populates the given array or FloatArray from the given index with the successive coordinates of the Vector3 |
|  [`toQuaternion()`](./decentraland-ecs.vector3.toquaternion.md) |  | `Quaternion` | Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation) |
|  [`TransformCoordinates(vector, transformation)`](./decentraland-ecs.vector3.transformcoordinates.md) |  | `Vector3` | Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector. This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account) |
|  [`TransformCoordinatesFromFloatsToRef(x, y, z, transformation, result)`](./decentraland-ecs.vector3.transformcoordinatesfromfloatstoref.md) |  | `void` | Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z) This method computes tranformed coordinates only, not transformed direction vectors |
|  [`TransformCoordinatesToRef(vector, transformation, result)`](./decentraland-ecs.vector3.transformcoordinatestoref.md) |  | `void` | Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account) |
|  [`TransformNormal(vector, transformation)`](./decentraland-ecs.vector3.transformnormal.md) |  | `Vector3` | Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector This methods computes transformed normalized direction vectors only (ie. it does not apply translation) |
|  [`TransformNormalFromFloatsToRef(x, y, z, transformation, result)`](./decentraland-ecs.vector3.transformnormalfromfloatstoref.md) |  | `void` | Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z) This methods computes transformed normalized direction vectors only (ie. it does not apply translation) |
|  [`TransformNormalToRef(vector, transformation, result)`](./decentraland-ecs.vector3.transformnormaltoref.md) |  | `void` | Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector This methods computes transformed normalized direction vectors only (ie. it does not apply translation) |
|  [`Up()`](./decentraland-ecs.vector3.up.md) |  | `Vector3` | Returns a new Vector3 set to (0.0, 1.0, 0.0) |
|  [`Zero()`](./decentraland-ecs.vector3.zero.md) |  | `Vector3` | Returns a new Vector3 set to (0.0, 0.0, 0.0) |

