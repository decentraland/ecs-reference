<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [positionChanged](./decentraland-ecs.ievents.positionchanged.md)

## IEvents.positionChanged property

`positionChanged` is triggered when the position of the camera changes This event is throttled to 10 times per second.

<b>Signature:</b>

```typescript
positionChanged: {
        position: ReadOnlyVector3;
        cameraPosition: ReadOnlyVector3;
        playerHeight: number;
    };
```
