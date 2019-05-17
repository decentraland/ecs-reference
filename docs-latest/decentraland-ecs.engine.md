[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Engine](./decentraland-ecs.engine.md)

# Engine class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`disposableComponents`](./decentraland-ecs.engine.disposablecomponents.md) |  | `Readonly<Record<string, DisposableComponentLike>>` |  |
|  [`entities`](./decentraland-ecs.engine.entities.md) |  | `Readonly<Record<string, IEntity>>` |  |
|  [`eventManager`](./decentraland-ecs.engine.eventmanager.md) |  | `EventManager` |  |
|  [`rootEntity`](./decentraland-ecs.engine.rootentity.md) |  | `IEntity` |  |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(rootEntity)`](./decentraland-ecs.engine.constructor.md) |  |  | Constructs a new instance of the [Engine](./decentraland-ecs.engine.md) class |
|  [`addEntity(entity)`](./decentraland-ecs.engine.addentity.md) |  | `void` |  |
|  [`addSystem(system, priority)`](./decentraland-ecs.engine.addsystem.md) |  | `void` |  |
|  [`disposeComponent(component)`](./decentraland-ecs.engine.disposecomponent.md) |  | `boolean` |  |
|  [`getComponentGroup(requires)`](./decentraland-ecs.engine.getcomponentgroup.md) |  | `ComponentGroup` |  |
|  [`getEntitiesWithComponent(component)`](./decentraland-ecs.engine.getentitieswithcomponent.md) |  | `Record<string, any>` |  |
|  [`registerComponent(component)`](./decentraland-ecs.engine.registercomponent.md) |  | `void` |  |
|  [`removeComponentGroup(componentGroup)`](./decentraland-ecs.engine.removecomponentgroup.md) |  | `void` |  |
|  [`removeEntity(entity)`](./decentraland-ecs.engine.removeentity.md) |  | `void` |  |
|  [`removeSystem(system)`](./decentraland-ecs.engine.removesystem.md) |  | `void` |  |
|  [`update(dt)`](./decentraland-ecs.engine.update.md) |  | `void` |  |
|  [`updateComponent(component)`](./decentraland-ecs.engine.updatecomponent.md) |  | `void` |  |

