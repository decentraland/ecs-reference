[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [positionChanged](./decentraland-ecs.ievents.positionchanged.md)

# IEvents.positionChanged property

`positionChanged` is triggered when the position of the camera changes This event is throttled to 10 times per second.

**Signature:**
```javascript
positionChanged: {
        /** Position relative to the base parcel of the scene */
        position: ReadOnlyVector3;
        /** Camera position, this is a absolute world position */
        cameraPosition: ReadOnlyVector3;
        /** Eye height, in meters. */
        playerHeight: number;
    }
```
