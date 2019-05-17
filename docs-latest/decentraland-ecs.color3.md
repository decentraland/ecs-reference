[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color3](./decentraland-ecs.color3.md)

# Color3 class

Class used to hold a RBG color

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`b`](./decentraland-ecs.color3.b.md) |  | `number` | Defines the blue component (between 0 and 1, default is 0) |
|  [`g`](./decentraland-ecs.color3.g.md) |  | `number` | Defines the green component (between 0 and 1, default is 0) |
|  [`r`](./decentraland-ecs.color3.r.md) |  | `number` | Defines the red component (between 0 and 1, default is 0) |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(r, g, b)`](./decentraland-ecs.color3.constructor.md) |  |  | Creates a new Color3 object from red, green, blue values, all between 0 and 1 |
|  [`add(otherColor)`](./decentraland-ecs.color3.add.md) |  | `Color3` | Creates a new Color3 set with the added values of the current Color3 and of the given one |
|  [`addToRef(otherColor, result)`](./decentraland-ecs.color3.addtoref.md) |  | `Color3` | Stores the result of the addition of the current Color3 and given one rgb values into "result" |
|  [`asArray()`](./decentraland-ecs.color3.asarray.md) |  | `number[]` | Returns a new array populated with 3 numeric elements : red, green and blue values |
|  [`Black()`](./decentraland-ecs.color3.black.md) |  | `Color3` | Returns a Color3 value containing a black color |
|  [`Blue()`](./decentraland-ecs.color3.blue.md) |  | `Color3` | Returns a Color3 value containing a blue color |
|  [`clampToRef(min, max, result)`](./decentraland-ecs.color3.clamptoref.md) |  | `Color3` | Clamps the rgb values by the min and max values and stores the result into "result" |
|  [`clone()`](./decentraland-ecs.color3.clone.md) |  | `Color3` | Copy the current object |
|  [`copyFrom(source)`](./decentraland-ecs.color3.copyfrom.md) |  | `Color3` | Copies the rgb values from the source in the current Color3 |
|  [`copyFromFloats(r, g, b)`](./decentraland-ecs.color3.copyfromfloats.md) |  | `Color3` | Updates the Color3 rgb values from the given floats |
|  [`equals(otherColor)`](./decentraland-ecs.color3.equals.md) |  | `boolean` | Determines equality between Color3 objects |
|  [`equalsFloats(r, g, b)`](./decentraland-ecs.color3.equalsfloats.md) |  | `boolean` | Determines equality between the current Color3 object and a set of r,b,g values |
|  [`FromArray(array, offset)`](./decentraland-ecs.color3.fromarray.md) |  | `Color3` | Creates a new Vector3 from the starting index of the given array |
|  [`FromHexString(hex)`](./decentraland-ecs.color3.fromhexstring.md) |  | `Color3` | Creates a new Color3 from the string containing valid hexadecimal values |
|  [`FromInts(r, g, b)`](./decentraland-ecs.color3.fromints.md) |  | `Color3` | Creates a new Color3 from integer values (less than 256) |
|  [`getClassName()`](./decentraland-ecs.color3.getclassname.md) |  | `string` | Returns the string "Color3" |
|  [`getHashCode()`](./decentraland-ecs.color3.gethashcode.md) |  | `number` | Compute the Color3 hash code |
|  [`Gray()`](./decentraland-ecs.color3.gray.md) |  | `Color3` | Returns a Color3 value containing a gray color |
|  [`Green()`](./decentraland-ecs.color3.green.md) |  | `Color3` | Returns a Color3 value containing a green color |
|  [`Lerp(start, end, amount)`](./decentraland-ecs.color3.lerp.md) |  | `Color3` | Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3 |
|  [`LerpToRef(left, right, amount, result)`](./decentraland-ecs.color3.lerptoref.md) |  | `void` | Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3 |
|  [`Magenta()`](./decentraland-ecs.color3.magenta.md) |  | `Color3` | Returns a Color3 value containing a magenta color |
|  [`multiply(otherColor)`](./decentraland-ecs.color3.multiply.md) |  | `Color3` | Multiply each Color3 rgb values by the given Color3 rgb values in a new Color3 object |
|  [`multiplyToRef(otherColor, result)`](./decentraland-ecs.color3.multiplytoref.md) |  | `Color3` | Multiply the rgb values of the Color3 and the given Color3 and stores the result in the object "result" |
|  [`Purple()`](./decentraland-ecs.color3.purple.md) |  | `Color3` | Returns a Color3 value containing a purple color |
|  [`Random()`](./decentraland-ecs.color3.random.md) |  | `Color3` | Returns a Color3 value containing a random color |
|  [`Red()`](./decentraland-ecs.color3.red.md) |  | `Color3` | Returns a Color3 value containing a red color |
|  [`scale(scale)`](./decentraland-ecs.color3.scale.md) |  | `Color3` | Multiplies in place each rgb value by scale |
|  [`scaleAndAddToRef(scale, result)`](./decentraland-ecs.color3.scaleandaddtoref.md) |  | `Color3` | Scale the current Color3 values by a factor and add the result to a given Color3 |
|  [`scaleToRef(scale, result)`](./decentraland-ecs.color3.scaletoref.md) |  | `Color3` | Multiplies the rgb values by scale and stores the result into "result" |
|  [`set(r, g, b)`](./decentraland-ecs.color3.set.md) |  | `Color3` | Updates the Color3 rgb values from the given floats |
|  [`subtract(otherColor)`](./decentraland-ecs.color3.subtract.md) |  | `Color3` | Returns a new Color3 set with the subtracted values of the given one from the current Color3 |
|  [`subtractToRef(otherColor, result)`](./decentraland-ecs.color3.subtracttoref.md) |  | `Color3` | Stores the result of the subtraction of given one from the current Color3 rgb values into "result" |
|  [`Teal()`](./decentraland-ecs.color3.teal.md) |  | `Color3` | Returns a Color3 value containing a teal color |
|  [`toArray(array, index)`](./decentraland-ecs.color3.toarray.md) |  | `Color3` | Stores in the given array from the given starting index the red, green, blue values as successive elements |
|  [`toColor4(alpha)`](./decentraland-ecs.color3.tocolor4.md) |  | `Color4` | Returns a new Color4 object from the current Color3 and the given alpha |
|  [`toGammaSpace()`](./decentraland-ecs.color3.togammaspace.md) |  | `Color3` | Computes a new Color3 converted from the current one to gamma space |
|  [`toGammaSpaceToRef(convertedColor)`](./decentraland-ecs.color3.togammaspacetoref.md) |  | `Color3` | Converts the Color3 values to gamma space and stores the result in "convertedColor" |
|  [`toHexString()`](./decentraland-ecs.color3.tohexstring.md) |  | `string` | Compute the Color3 hexadecimal code as a string |
|  [`toJSON()`](./decentraland-ecs.color3.tojson.md) |  | `{`<p/>`        r: number;`<p/>`        g: number;`<p/>`        b: number;`<p/>`    }` | Serializes Color3 |
|  [`toLinearSpace()`](./decentraland-ecs.color3.tolinearspace.md) |  | `Color3` | Computes a new Color3 converted from the current one to linear space |
|  [`toLinearSpaceToRef(convertedColor)`](./decentraland-ecs.color3.tolinearspacetoref.md) |  | `Color3` | Converts the Color3 values to linear space and stores the result in "convertedColor" |
|  [`toLuminance()`](./decentraland-ecs.color3.toluminance.md) |  | `number` | Returns the luminance value |
|  [`White()`](./decentraland-ecs.color3.white.md) |  | `Color3` | Returns a Color3 value containing a white color |
|  [`Yellow()`](./decentraland-ecs.color3.yellow.md) |  | `Color3` | Returns a Color3 value containing a yellow color |

