[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEntity](./decentraland-ecs.ientity.md)

# IEntity interface

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`alive`](./decentraland-ecs.ientity.alive.md) | `boolean` |  |
|  [`children`](./decentraland-ecs.ientity.children.md) | `Record<string, IEntity>` |  |
|  [`components`](./decentraland-ecs.ientity.components.md) | `Record<string, any>` |  |
|  [`eventManager`](./decentraland-ecs.ientity.eventmanager.md) | `EventManager | null` |  |
|  [`uuid`](./decentraland-ecs.ientity.uuid.md) | `string` |  |

## Methods

|  Method | Returns | Description |
|  --- | --- | --- |
|  [`addComponent(component)`](./decentraland-ecs.ientity.addcomponent.md) | `void` | Adds a component. If the component already exist, it throws an Error. |
|  [`addComponentOrReplace(component)`](./decentraland-ecs.ientity.addcomponentorreplace.md) | `void` |  |
|  [`getComponent(component)`](./decentraland-ecs.ientity.getcomponent.md) | `T` |  |
|  [`getComponentOrCreate(component)`](./decentraland-ecs.ientity.getcomponentorcreate.md) | `T` |  |
|  [`getComponentOrNull(component)`](./decentraland-ecs.ientity.getcomponentornull.md) | `T | null` | Gets a component, if it doesn't exist, it returns null. |
|  [`getParent()`](./decentraland-ecs.ientity.getparent.md) | `IEntity | null` |  |
|  [`hasComponent(component)`](./decentraland-ecs.ientity.hascomponent.md) | `boolean` |  |
|  [`isAddedToEngine()`](./decentraland-ecs.ientity.isaddedtoengine.md) | `boolean` |  |
|  [`removeComponent(component, triggerRemovedEvent)`](./decentraland-ecs.ientity.removecomponent.md) | `void` |  |
|  [`setParent(e)`](./decentraland-ecs.ientity.setparent.md) | `void` |  |

