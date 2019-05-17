[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Size](./decentraland-ecs.size.md)

# Size class

Size containing widht and height

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`height`](./decentraland-ecs.size.height.md) |  | `number` | Height |
|  [`surface`](./decentraland-ecs.size.surface.md) |  | `number` | The surface of the Size : width \* height (float). |
|  [`width`](./decentraland-ecs.size.width.md) |  | `number` | Width |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(width, height)`](./decentraland-ecs.size.constructor.md) |  |  | Creates a Size object from the given width and height (floats). |
|  [`add(otherSize)`](./decentraland-ecs.size.add.md) |  | `Size` | Sums the width and height of two sizes |
|  [`clone()`](./decentraland-ecs.size.clone.md) |  | `Size` | Clones the size |
|  [`copyFrom(src)`](./decentraland-ecs.size.copyfrom.md) |  | `void` | Updates the current size from the given one. |
|  [`copyFromFloats(width, height)`](./decentraland-ecs.size.copyfromfloats.md) |  | `Size` | Updates in place the current Size from the given floats. |
|  [`equals(other)`](./decentraland-ecs.size.equals.md) |  | `boolean` | True if the current Size and the given one width and height are strictly equal. |
|  [`getClassName()`](./decentraland-ecs.size.getclassname.md) |  | `string` | "Size" |
|  [`getHashCode()`](./decentraland-ecs.size.gethashcode.md) |  | `number` | Returns the Size hash code. |
|  [`Lerp(start, end, amount)`](./decentraland-ecs.size.lerp.md) |  | `Size` | Creates a new Size set at the linear interpolation "amount" between "start" and "end" |
|  [`multiplyByFloats(w, h)`](./decentraland-ecs.size.multiplybyfloats.md) |  | `Size` | Multiplies the width and height by numbers |
|  [`set(width, height)`](./decentraland-ecs.size.set.md) |  | `Size` | Updates in place the current Size from the given floats. |
|  [`subtract(otherSize)`](./decentraland-ecs.size.subtract.md) |  | `Size` | Subtracts the width and height of two |
|  [`Zero()`](./decentraland-ecs.size.zero.md) |  | `Size` | Create a new size of zero |

