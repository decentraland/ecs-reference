[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Entity](./decentraland-ecs.entity.md)

# Entity class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`alive`](./decentraland-ecs.entity.alive.md) |  | `boolean` |  |
|  [`children`](./decentraland-ecs.entity.children.md) |  | `Record<string, IEntity>` |  |
|  [`components`](./decentraland-ecs.entity.components.md) |  | `Record<string, any>` |  |
|  [`eventManager`](./decentraland-ecs.entity.eventmanager.md) |  | `EventManager | null` |  |
|  [`name`](./decentraland-ecs.entity.name.md) |  | `string | undefined` |  |
|  [`uuid`](./decentraland-ecs.entity.uuid.md) |  | `string` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(name)`](./decentraland-ecs.entity.constructor.md) |  |  | Constructs a new instance of the [Entity](./decentraland-ecs.entity.md) class |
|  [`addComponent(component)`](./decentraland-ecs.entity.addcomponent.md) |  | `void` | Adds a component. If the component already exist, it throws an Error. |
|  [`addComponentOrReplace(component)`](./decentraland-ecs.entity.addcomponentorreplace.md) |  | `void` | Adds or replaces a component in the entity. |
|  [`getComponent(component)`](./decentraland-ecs.entity.getcomponent.md) |  | `T` | Gets a component, if it doesn't exist, it throws an Error. |
|  [`getComponentOrCreate(component)`](./decentraland-ecs.entity.getcomponentorcreate.md) |  | `T` | Gets a component, if it doesn't exist, it creates the component and returns it. |
|  [`getComponentOrNull(component)`](./decentraland-ecs.entity.getcomponentornull.md) |  | `T | null` | Gets a component, if it doesn't exist, it returns null. |
|  [`getParent()`](./decentraland-ecs.entity.getparent.md) |  | `IEntity | null` | Gets the parent entity |
|  [`hasComponent(component)`](./decentraland-ecs.entity.hascomponent.md) |  | `boolean` | Returns a boolean indicating if a component is present in the entity. |
|  [`isAddedToEngine()`](./decentraland-ecs.entity.isaddedtoengine.md) |  | `boolean` | Returns true if the entity is already added to the engine. Returns false if no engine was defined. |
|  [`removeComponent(component, triggerRemovedEvent)`](./decentraland-ecs.entity.removecomponent.md) |  | `void` | Removes a component instance from the entity. |
|  [`setParent(newParent)`](./decentraland-ecs.entity.setparent.md) |  | `void` | Sets the parent entity |

