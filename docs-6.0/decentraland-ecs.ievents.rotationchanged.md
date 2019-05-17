[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [rotationChanged](./decentraland-ecs.ievents.rotationchanged.md)

# IEvents.rotationChanged property

`rotationChanged` is triggered when the rotation of the camera changes. This event is throttled to 10 times per second.

**Signature:**
```javascript
rotationChanged: {
        /** Degree vector. Same as entities */
        rotation: ReadOnlyVector3;
        /** Rotation quaternion, useful in some scenarios. */
        quaternion: ReadOnlyQuaternion;
    }
```
