[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md)

# Quaternion class

Class used to store quaternion data [https://en.wikipedia.org/wiki/Quaternion](https://en.wikipedia.org/wiki/Quaternion) [http://doc.babylonjs.com/features/position,\_rotation,\_scaling](http://doc.babylonjs.com/features/position,_rotation,_scaling)

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`eulerAngles`](./decentraland-ecs.quaternion.eulerangles.md) |  | `Vector3` | Sets the euler angle representation of the rotation. |
|  [`Identity`](./decentraland-ecs.quaternion.identity.md) |  | `Quaternion` | Creates an identity quaternion |
|  [`length`](./decentraland-ecs.quaternion.length.md) |  | `number` | Gets length of current quaternion |
|  [`lengthSquared`](./decentraland-ecs.quaternion.lengthsquared.md) |  | `number` | Gets length of current quaternion |
|  [`normalized`](./decentraland-ecs.quaternion.normalized.md) |  | `Quaternion` | Converts this quaternion to one with the same orientation but with a magnitude of 1. |
|  [`w`](./decentraland-ecs.quaternion.w.md) |  | `number` | defines the fourth component (1.0 by default) |
|  [`x`](./decentraland-ecs.quaternion.x.md) |  | `number` | defines the first component (0 by default) |
|  [`y`](./decentraland-ecs.quaternion.y.md) |  | `number` | defines the second component (0 by default) |
|  [`z`](./decentraland-ecs.quaternion.z.md) |  | `number` | defines the third component (0 by default) |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(x, y, z, w)`](./decentraland-ecs.quaternion.constructor.md) |  |  | Creates a new Quaternion from the given floats |
|  [`Angle(quat1, quat2)`](./decentraland-ecs.quaternion.angle.md) |  | `number` | Returns the angle in degrees between two rotations a and b. |
|  [`angleAxis(degress, axis)`](./decentraland-ecs.quaternion.angleaxis.md) |  | `Quaternion` |  |
|  [`AreClose(quat0, quat1)`](./decentraland-ecs.quaternion.areclose.md) |  | `boolean` | Checks if the two quaternions are close to each other |
|  [`asArray()`](./decentraland-ecs.quaternion.asarray.md) |  | `number[]` | Copy the quaternion to an array |
|  [`clone()`](./decentraland-ecs.quaternion.clone.md) |  | `Quaternion` | Clone the current quaternion |
|  [`conjugate()`](./decentraland-ecs.quaternion.conjugate.md) |  | `Quaternion` | Conjugates in place (1-q) the current quaternion |
|  [`conjugateInPlace()`](./decentraland-ecs.quaternion.conjugateinplace.md) |  | `Quaternion` | Conjugates in place (1-q) the current quaternion |
|  [`conjugateToRef(ref)`](./decentraland-ecs.quaternion.conjugatetoref.md) |  | `Quaternion` | Conjugates (1-q) the current quaternion and stores the result in the given quaternion |
|  [`copyFrom(other)`](./decentraland-ecs.quaternion.copyfrom.md) |  | `Quaternion` | Copy a quaternion to the current one |
|  [`copyFromFloats(x, y, z, w)`](./decentraland-ecs.quaternion.copyfromfloats.md) |  | `Quaternion` | Updates the current quaternion with the given float coordinates |
|  [`Dot(left, right)`](./decentraland-ecs.quaternion.dot.md) |  | `number` | Returns the dot product (float) between the quaternions "left" and "right" |
|  [`equals(otherQuaternion)`](./decentraland-ecs.quaternion.equals.md) |  | `boolean` | Check if two quaternions are equals |
|  [`Euler(x, y, z)`](./decentraland-ecs.quaternion.euler.md) |  | `Quaternion` | Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis. |
|  [`FromArray(array, offset)`](./decentraland-ecs.quaternion.fromarray.md) |  | `Quaternion` | Creates a new quaternion from data stored into an array |
|  [`FromEulerAnglesRef(x, y, z, result)`](./decentraland-ecs.quaternion.fromeuleranglesref.md) |  | `void` | Creates a new quaternion from a set of euler angles and stores it in the target quaternion |
|  [`fromRotationMatrix(matrix)`](./decentraland-ecs.quaternion.fromrotationmatrix.md) |  | `Quaternion` | Updates the current quaternion from the given rotation matrix values |
|  [`FromRotationMatrix(matrix)`](./decentraland-ecs.quaternion.fromrotationmatrix.md) |  | `Quaternion` | Creates a new quaternion from a rotation matrix |
|  [`FromRotationMatrixToRef(matrix, result)`](./decentraland-ecs.quaternion.fromrotationmatrixtoref.md) |  | `void` | Updates the given quaternion with the given rotation matrix values |
|  [`FromToRotation(from, to)`](./decentraland-ecs.quaternion.fromtorotation.md) |  | `Quaternion` | Creates a rotation which rotates from fromDirection to toDirection. |
|  [`getClassName()`](./decentraland-ecs.quaternion.getclassname.md) |  | `string` | Gets the class name of the quaternion |
|  [`getHashCode()`](./decentraland-ecs.quaternion.gethashcode.md) |  | `number` | Gets a hash code for this quaternion |
|  [`Hermite(value1, tangent1, value2, tangent2, amount)`](./decentraland-ecs.quaternion.hermite.md) |  | `Quaternion` | Interpolate between two quaternions using Hermite interpolation |
|  [`Inverse(q)`](./decentraland-ecs.quaternion.inverse.md) |  | `Quaternion` | Inverse a given quaternion |
|  [`IsIdentity(quaternion)`](./decentraland-ecs.quaternion.isidentity.md) |  | `boolean` | Gets a boolean indicating if the given quaternion is identity |
|  [`LookRotation(forward, up)`](./decentraland-ecs.quaternion.lookrotation.md) |  | `Quaternion` | Creates a rotation with the specified forward and upwards directions. |
|  [`multiply(q1)`](./decentraland-ecs.quaternion.multiply.md) |  | `Quaternion` | Multiplies two quaternions |
|  [`multiplyInPlace(q1)`](./decentraland-ecs.quaternion.multiplyinplace.md) |  | `Quaternion` | Updates the current quaternion with the multiplication of itself with the given one "q1" |
|  [`multiplyToRef(q1, result)`](./decentraland-ecs.quaternion.multiplytoref.md) |  | `Quaternion` | Sets the given "result" as the the multiplication result of the current one with the given one "q1" |
|  [`normalize()`](./decentraland-ecs.quaternion.normalize.md) |  | `Quaternion` | Normalize in place the current quaternion |
|  [`RotateTowards(from, to, maxDegreesDelta)`](./decentraland-ecs.quaternion.rotatetowards.md) |  | `Quaternion` | The from quaternion is rotated towards to by an angular step of maxDegreesDelta. |
|  [`RotationAlphaBetaGamma(alpha, beta, gamma)`](./decentraland-ecs.quaternion.rotationalphabetagamma.md) |  | `Quaternion` | Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation |
|  [`RotationAlphaBetaGammaToRef(alpha, beta, gamma, result)`](./decentraland-ecs.quaternion.rotationalphabetagammatoref.md) |  | `void` | Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion |
|  [`RotationAxis(axis, angle)`](./decentraland-ecs.quaternion.rotationaxis.md) |  | `Quaternion` | Creates a quaternion from a rotation around an axis |
|  [`RotationAxisToRef(axis, angle, result)`](./decentraland-ecs.quaternion.rotationaxistoref.md) |  | `Quaternion` | Creates a rotation around an axis and stores it into the given quaternion |
|  [`RotationQuaternionFromAxis(axis1, axis2, axis3)`](./decentraland-ecs.quaternion.rotationquaternionfromaxis.md) |  | `Quaternion` | Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) |
|  [`RotationQuaternionFromAxisToRef(axis1, axis2, axis3, ref)`](./decentraland-ecs.quaternion.rotationquaternionfromaxistoref.md) |  | `void` | Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion |
|  [`RotationYawPitchRoll(yaw, pitch, roll)`](./decentraland-ecs.quaternion.rotationyawpitchroll.md) |  | `Quaternion` | Creates a new quaternion from the given Euler float angles (y, x, z) |
|  [`RotationYawPitchRollToRef(yaw, pitch, roll, result)`](./decentraland-ecs.quaternion.rotationyawpitchrolltoref.md) |  | `void` | Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion |
|  [`scale(value)`](./decentraland-ecs.quaternion.scale.md) |  | `Quaternion` | Multiplies the current quaternion by a scale factor |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.quaternion.scaleandaddtoref.md) |  | `Quaternion` | Scale the current quaternion values by a factor and add the result to a given quaternion |
|  [`scaleInPlace(value)`](./decentraland-ecs.quaternion.scaleinplace.md) |  | `Quaternion` | Multiplies in place the current quaternion by a scale factor |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.quaternion.scaletoref.md) |  | `Quaternion` | Scale the current quaternion values by a factor and stores the result to a given quaternion |
|  [`set(x, y, z, w)`](./decentraland-ecs.quaternion.set.md) |  | `Quaternion` | Updates the current quaternion from the given float coordinates |
|  [`setEuler(x, y, z)`](./decentraland-ecs.quaternion.seteuler.md) |  | `Quaternion` | Updates the current quaternion from the given euler angles |
|  [`setFromToRotation(from, to, up)`](./decentraland-ecs.quaternion.setfromtorotation.md) |  | `void` | Creates a rotation which rotates from fromDirection to toDirection. |
|  [`Slerp(left, right, amount)`](./decentraland-ecs.quaternion.slerp.md) |  | `Quaternion` | Interpolates between two quaternions |
|  [`SlerpToRef(left, right, amount, result)`](./decentraland-ecs.quaternion.slerptoref.md) |  | `void` | Interpolates between two quaternions and stores it into a target quaternion |
|  [`subtract(other)`](./decentraland-ecs.quaternion.subtract.md) |  | `Quaternion` | Subtract two quaternions |
|  [`toRotationMatrix(result)`](./decentraland-ecs.quaternion.torotationmatrix.md) |  | `Quaternion` | Updates the given rotation matrix with the current quaternion values |
|  [`Zero()`](./decentraland-ecs.quaternion.zero.md) |  | `Quaternion` | Creates an empty quaternion |

