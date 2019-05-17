[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Entity](./decentraland-ecs.entity.md)

# Entity class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`alive`](./decentraland-ecs.entity.alive.md) |  | `boolean` |  |
|  [`children`](./decentraland-ecs.entity.children.md) |  | `Record<string, Entity>` |  |
|  [`components`](./decentraland-ecs.entity.components.md) |  | `Record<string, any>` |  |
|  [`eventManager`](./decentraland-ecs.entity.eventmanager.md) |  | `EventManager | null` |  |
|  [`name`](./decentraland-ecs.entity.name.md) |  | `string | undefined` |  |
|  [`uuid`](./decentraland-ecs.entity.uuid.md) |  | `string` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(_parent, name)`](./decentraland-ecs.entity.constructor.md) |  |  | Constructs a new instance of the [Entity](./decentraland-ecs.entity.md) class |
|  [`add(component)`](./decentraland-ecs.entity.add.md) |  | `void` | Adds a component. If the component already exist, it throws an Error. |
|  [`get(component)`](./decentraland-ecs.entity.get.md) |  | `T` | Gets a component, if it doesn't exist, it throws an Error. |
|  [`getOrCreate(component)`](./decentraland-ecs.entity.getorcreate.md) |  | `T | null` | Gets a component, if it doesn't exist, it creates the component and returns it. |
|  [`getOrNull(component)`](./decentraland-ecs.entity.getornull.md) |  | `T | null` | Gets a component, if it doesn't exist, it returns null. |
|  [`getParent()`](./decentraland-ecs.entity.getparent.md) |  | `Entity | null` | Gets the parent entity |
|  [`has(component)`](./decentraland-ecs.entity.has.md) |  | `boolean` | Returns a boolean indicating if a component is present in the entity. |
|  [`isAddedToEngine()`](./decentraland-ecs.entity.isaddedtoengine.md) |  | `boolean` | Returns true if the entity is already added to the engine. Returns false if no engine was defined. |
|  [`remove(component)`](./decentraland-ecs.entity.remove.md) |  | `void` | Removes a component instance from the entity. |
|  [`set(component)`](./decentraland-ecs.entity.set.md) |  | `void` | Adds or replaces a component in the entity. |
|  [`setParent(entity)`](./decentraland-ecs.entity.setparent.md) |  | `void` | Sets the parent entity |

