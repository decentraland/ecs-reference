[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color4](./decentraland-ecs.color4.md)

# Color4 class

Class used to hold a RBGA color

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`a`](./decentraland-ecs.color4.a.md) |  | `number` | Defines the alpha component (between 0 and 1, default is 1) |
|  [`b`](./decentraland-ecs.color4.b.md) |  | `number` | Defines the blue component (between 0 and 1, default is 0) |
|  [`g`](./decentraland-ecs.color4.g.md) |  | `number` | Defines the green component (between 0 and 1, default is 0) |
|  [`r`](./decentraland-ecs.color4.r.md) |  | `number` | Defines the red component (between 0 and 1, default is 0) |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(r, g, b, a)`](./decentraland-ecs.color4.constructor.md) |  |  | Creates a new Color4 object from red, green, blue values, all between 0 and 1 |
|  [`add(right)`](./decentraland-ecs.color4.add.md) |  | `Color4` | Creates a new Color4 set with the added values of the current Color4 and of the given one |
|  [`addInPlace(right)`](./decentraland-ecs.color4.addinplace.md) |  | `Color4` | Adds in place the given Color4 values to the current Color4 object |
|  [`asArray()`](./decentraland-ecs.color4.asarray.md) |  | `number[]` | Creates a new array populated with 4 numeric elements : red, green, blue, alpha values |
|  [`Black()`](./decentraland-ecs.color4.black.md) |  | `Color4` | Returns a Color4 value containing a black color |
|  [`Blue()`](./decentraland-ecs.color4.blue.md) |  | `Color4` | Returns a Color4 value containing a blue color |
|  [`CheckColors4(colors, count)`](./decentraland-ecs.color4.checkcolors4.md) |  | `number[]` | Check the content of a given array and convert it to an array containing RGBA data If the original array was already containing count \* 4 values then it is returned directly |
|  [`clampToRef(min, max, result)`](./decentraland-ecs.color4.clamptoref.md) |  | `Color4` | Clamps the rgb values by the min and max values and stores the result into "result" |
|  [`Clear()`](./decentraland-ecs.color4.clear.md) |  | `Color4` | Returns a Color4 value containing a transparent color |
|  [`clone()`](./decentraland-ecs.color4.clone.md) |  | `Color4` | Creates a new Color4 copied from the current one |
|  [`copyFrom(source)`](./decentraland-ecs.color4.copyfrom.md) |  | `Color4` | Copies the given Color4 values into the current one |
|  [`copyFromFloats(r, g, b, a)`](./decentraland-ecs.color4.copyfromfloats.md) |  | `Color4` | Copies the given float values into the current one |
|  [`FromArray(array, offset)`](./decentraland-ecs.color4.fromarray.md) |  | `Color4` | Creates a new Color4 from the starting index element of the given array |
|  [`FromColor3(color3, alpha)`](./decentraland-ecs.color4.fromcolor3.md) |  | `Color4` | Creates a new Color4 from a Color3 and an alpha value |
|  [`FromHexString(hex)`](./decentraland-ecs.color4.fromhexstring.md) |  | `Color4` | Creates a new Color4 from the string containing valid hexadecimal values |
|  [`FromInts(r, g, b, a)`](./decentraland-ecs.color4.fromints.md) |  | `Color4` | Creates a new Color3 from integer values (less than 256) |
|  [`getClassName()`](./decentraland-ecs.color4.getclassname.md) |  | `string` | Returns the string "Color4" |
|  [`getHashCode()`](./decentraland-ecs.color4.gethashcode.md) |  | `number` | Compute the Color4 hash code |
|  [`Gray()`](./decentraland-ecs.color4.gray.md) |  | `Color4` | Returns a Color4 value containing a gray color |
|  [`Green()`](./decentraland-ecs.color4.green.md) |  | `Color4` | Returns a Color4 value containing a green color |
|  [`Lerp(left, right, amount)`](./decentraland-ecs.color4.lerp.md) |  | `Color4` | Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object |
|  [`LerpToRef(left, right, amount, result)`](./decentraland-ecs.color4.lerptoref.md) |  | `void` | Set the given "result" with the linearly interpolated values of "amount" between the left Color4 object and the right Color4 object |
|  [`Magenta()`](./decentraland-ecs.color4.magenta.md) |  | `Color4` | Returns a Color4 value containing a magenta color |
|  [`multiply(color)`](./decentraland-ecs.color4.multiply.md) |  | `Color4` | Multipy an Color4 value by another and return a new Color4 object |
|  [`multiplyToRef(color, result)`](./decentraland-ecs.color4.multiplytoref.md) |  | `Color4` | Multipy a Color4 value by another and push the result in a reference value |
|  [`Purple()`](./decentraland-ecs.color4.purple.md) |  | `Color4` | Returns a Color4 value containing a purple color |
|  [`Red()`](./decentraland-ecs.color4.red.md) |  | `Color4` | Returns a Color4 value containing a red color |
|  [`scale(scale)`](./decentraland-ecs.color4.scale.md) |  | `Color4` | Creates a new Color4 with the current Color4 values multiplied by scale |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.color4.scaleandaddtoref.md) |  | `Color4` | Scale the current Color4 values by a factor and add the result to a given Color4 |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.color4.scaletoref.md) |  | `Color4` | Multiplies the current Color4 values by scale and stores the result in "result" |
|  [`set(r, g, b, a)`](./decentraland-ecs.color4.set.md) |  | `Color4` | Copies the given float values into the current one |
|  [`subtract(right)`](./decentraland-ecs.color4.subtract.md) |  | `Color4` | Creates a new Color4 set with the subtracted values of the given one from the current Color4 |
|  [`subtractToRef(right, result)`](./decentraland-ecs.color4.subtracttoref.md) |  | `Color4` | Subtracts the given ones from the current Color4 values and stores the results in "result" |
|  [`Teal()`](./decentraland-ecs.color4.teal.md) |  | `Color4` | Returns a Color4 value containing a teal color |
|  [`toArray(array, index)`](./decentraland-ecs.color4.toarray.md) |  | `Color4` | Stores from the starting index in the given array the Color4 successive values |
|  [`toGammaSpace()`](./decentraland-ecs.color4.togammaspace.md) |  | `Color4` | Computes a new Color4 converted from the current one to gamma space |
|  [`toGammaSpaceToRef(convertedColor)`](./decentraland-ecs.color4.togammaspacetoref.md) |  | `Color4` | Converts the Color4 values to gamma space and stores the result in "convertedColor" |
|  [`toHexString()`](./decentraland-ecs.color4.tohexstring.md) |  | `string` | Compute the Color4 hexadecimal code as a string |
|  [`toLinearSpace()`](./decentraland-ecs.color4.tolinearspace.md) |  | `Color4` | Computes a new Color4 converted from the current one to linear space |
|  [`toLinearSpaceToRef(convertedColor)`](./decentraland-ecs.color4.tolinearspacetoref.md) |  | `Color4` | Converts the Color4 values to linear space and stores the result in "convertedColor" |
|  [`White()`](./decentraland-ecs.color4.white.md) |  | `Color4` | Returns a Color4 value containing a white color |
|  [`Yellow()`](./decentraland-ecs.color4.yellow.md) |  | `Color4` | Returns a Color4 value containing a yellow color |

