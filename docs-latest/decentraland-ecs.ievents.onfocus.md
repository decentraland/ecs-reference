[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [onFocus](./decentraland-ecs.ievents.onfocus.md)

# IEvents.onFocus property

`onFocus` is triggered when an entity focus is active. Dispatched by the `ui-input` and `ui-password` entities when the value is changed. It triggers a callback.

Notice: Only entities with ID will be listening for click events.

**Signature:**
```javascript
onFocus: {
        /** ID of the entitiy of the event */
        entityId: string;
        /** ID of the pointer that triggered the event */
        pointerId: number;
    }
```
