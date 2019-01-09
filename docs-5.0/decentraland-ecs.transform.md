[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Transform](./decentraland-ecs.transform.md)

# Transform class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`eulerAngles`](./decentraland-ecs.transform.eulerangles.md) |  | `Vector3` | The rotation as Euler angles in degrees. |
|  [`position`](./decentraland-ecs.transform.position.md) |  | `Vector3` |  |
|  [`rotation`](./decentraland-ecs.transform.rotation.md) |  | `Quaternion` |  |
|  [`scale`](./decentraland-ecs.transform.scale.md) |  | `Vector3` |  |
|  [`tag`](./decentraland-ecs.transform.tag.md) |  | `string` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(args)`](./decentraland-ecs.transform.constructor.md) |  |  | Constructs a new instance of the [Transform](./decentraland-ecs.transform.md) class |
|  [`lookAt(target, worldUp)`](./decentraland-ecs.transform.lookat.md) |  | `void` | Rotates the transform so the forward vector points at target's current position. |
|  [`rotate(axis, angle)`](./decentraland-ecs.transform.rotate.md) |  | `void` | Applies a rotation of euler angles around the x, y and z axis. |
|  [`translate(vec)`](./decentraland-ecs.transform.translate.md) |  | `void` | Moves the transform in the direction and distance of translation. |

