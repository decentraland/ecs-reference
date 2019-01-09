[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Entity](./decentraland-ecs.entity.md) &gt; [getOrCreate](./decentraland-ecs.entity.getorcreate.md)

# Entity.getOrCreate method

Gets a component, if it doesn't exist, it creates the component and returns it.

**Signature:**
```javascript
getOrCreate<T>(component: ComponentConstructor<T> & {
        new (): T;
    }): T | null;
```
**Returns:** `T | null`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `component` | `ComponentConstructor<T> & {`<p/>`        new (): T;`<p/>`    }` | component class |

