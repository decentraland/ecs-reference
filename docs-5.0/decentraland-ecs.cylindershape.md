[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [CylinderShape](./decentraland-ecs.cylindershape.md)

# CylinderShape class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`arc`](./decentraland-ecs.cylindershape.arc.md) |  | `number` | Sets the ratio (max 1) to apply to the circumference to slice the cylinder. Defaults to 360. |
|  [`openEnded`](./decentraland-ecs.cylindershape.openended.md) |  | `boolean` | Adds two extra faces per subdivision to enclose the cylinder around its height axis. Defaults to false. |
|  [`radius`](./decentraland-ecs.cylindershape.radius.md) |  | `number | null` | Sets the radius of the top and bottom caps at once.<p/>Properties `radiusTop` and `radiusBottom` are prioritized over this one. |
|  [`radiusBottom`](./decentraland-ecs.cylindershape.radiusbottom.md) |  | `number` | The radius of the base of the cylinder. Defaults to 1. |
|  [`radiusTop`](./decentraland-ecs.cylindershape.radiustop.md) |  | `number` | The radius of the top of the cylinder. Defaults to 0. |
|  [`segmentsHeight`](./decentraland-ecs.cylindershape.segmentsheight.md) |  | `number` | Sets the number of rings along the cylinder height (positive integer). Defaults to 1. |
|  [`segmentsRadial`](./decentraland-ecs.cylindershape.segmentsradial.md) |  | `number` | Sets the number of cylinder sides (positive integer). Defaults to 36. |
|  [`tag`](./decentraland-ecs.cylindershape.tag.md) |  | `string` |  |

