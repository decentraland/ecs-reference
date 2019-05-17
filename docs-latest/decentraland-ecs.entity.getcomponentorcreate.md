[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Entity](./decentraland-ecs.entity.md) &gt; [getComponentOrCreate](./decentraland-ecs.entity.getcomponentorcreate.md)

# Entity.getComponentOrCreate method

Gets a component, if it doesn't exist, it creates the component and returns it.

**Signature:**
```javascript
getComponentOrCreate<T>(component: ComponentConstructor<T> & {
        new (): T;
    }): T;
```
**Returns:** `T`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `component` | `ComponentConstructor<T> & {`<p/>`        new (): T;`<p/>`    }` | component class |

