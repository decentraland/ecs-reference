[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [onChange](./decentraland-ecs.ievents.onchange.md)

# IEvents.onChange property

`onChange` is triggered when an entity changes its own internal state. Dispatched by the `ui-*` entities when their value is changed. It triggers a callback. Notice: Only entities with ID will be listening for click events.

**Signature:**
```javascript
onChange: {
        value?: any;
        /** ID of the pointer that triggered the event */
        pointerId?: number;
    }
```
