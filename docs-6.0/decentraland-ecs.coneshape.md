[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [ConeShape](./decentraland-ecs.coneshape.md)

# ConeShape class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`arc`](./decentraland-ecs.coneshape.arc.md) |  | `number` | Sets the ratio (max 1) to apply to the circumference to slice the cone. Defaults to 360. |
|  [`openEnded`](./decentraland-ecs.coneshape.openended.md) |  | `boolean` | Adds two extra faces per subdivision to enclose the cone around its height axis. Defaults to false. |
|  [`radius`](./decentraland-ecs.coneshape.radius.md) |  | `number | null` | Sets the radius of the top and bottom caps at once.<p/>Properties `radiusTop` and `radiusBottom` are prioritized over this one. |
|  [`radiusBottom`](./decentraland-ecs.coneshape.radiusbottom.md) |  | `number` | The radius of the base of the cone. Defaults to 1. |
|  [`radiusTop`](./decentraland-ecs.coneshape.radiustop.md) |  | `number` | The radius of the top of a truncated cone. Defaults to 0. |
|  [`segmentsHeight`](./decentraland-ecs.coneshape.segmentsheight.md) |  | `number` | Sets the number of rings along the cone height (positive integer). Defaults to 1. |
|  [`segmentsRadial`](./decentraland-ecs.coneshape.segmentsradial.md) |  | `number` | Sets the number of cone sides (positive integer). Defaults to 36. |

