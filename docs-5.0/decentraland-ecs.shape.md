[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Shape](./decentraland-ecs.shape.md)

# Shape class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`billboard`](./decentraland-ecs.shape.billboard.md) |  | `number` | Billboard defines a behavior that makes the entity face the camera in any moment. There are three combinable types of camera facing options defined in the object BillboardModes. BILLBOARDMODE\_NONE: 0 BILLBOARDMODE\_X: 1 BILLBOARDMODE\_Y: 2 BILLBOARDMODE\_Z: 4 BILLBOARDMODE\_ALL: 7<p/>To combine billboard types write those in the form: BillboardModes.BILLBOARDMODE\_X \| BillboardModes.BILLBOARDMODE\_Y |
|  [`tag`](./decentraland-ecs.shape.tag.md) |  | `string` |  |
|  [`visible`](./decentraland-ecs.shape.visible.md) |  | `boolean` | Defines if the entity and its children should be rendered |
|  [`withCollisions`](./decentraland-ecs.shape.withcollisions.md) |  | `boolean` | Set to true to turn on the collider for the entity. |

