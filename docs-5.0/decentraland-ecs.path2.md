[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Path2](./decentraland-ecs.path2.md)

# Path2 class

Represents a 2D path made up of multiple 2D points

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`closed`](./decentraland-ecs.path2.closed.md) |  | `boolean` | If the path start and end point are the same |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(x, y)`](./decentraland-ecs.path2.constructor.md) |  |  | Creates a Path2 object from the starting 2D coordinates x and y. |
|  [`addArcTo(midX, midY, endX, endY, numberOfSegments)`](./decentraland-ecs.path2.addarcto.md) |  | `Path2` | Adds \_numberOfSegments\_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2. |
|  [`addLineTo(x, y)`](./decentraland-ecs.path2.addlineto.md) |  | `Path2` | Adds a new segment until the given coordinates (x, y) to the current Path2. |
|  [`close()`](./decentraland-ecs.path2.close.md) |  | `Path2` | Closes the Path2. |
|  [`getPointAtLengthPosition(normalizedLengthPosition)`](./decentraland-ecs.path2.getpointatlengthposition.md) |  | `Vector2` | Retreives the point at the distance aways from the starting point |
|  [`getPoints()`](./decentraland-ecs.path2.getpoints.md) |  | `Vector2[]` | Gets the points which construct the path |
|  [`length()`](./decentraland-ecs.path2.length.md) |  | `number` | Gets the sum of the distance between each sequential point in the path |
|  [`StartingAt(x, y)`](./decentraland-ecs.path2.startingat.md) |  | `Path2` | Creates a new path starting from an x and y position |

