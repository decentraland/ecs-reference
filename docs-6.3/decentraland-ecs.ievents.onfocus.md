<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [onFocus](./decentraland-ecs.ievents.onfocus.md)

## IEvents.onFocus property

`onFocus` is triggered when an entity focus is active. Dispatched by the `ui-input` and `ui-password` entities when the value is changed. It triggers a callback.

Notice: Only entities with ID will be listening for click events.

<b>Signature:</b>

```typescript
onFocus: {
        entityId: string;
        pointerId: number;
    };
```
