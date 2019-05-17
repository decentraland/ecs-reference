[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Shape](./decentraland-ecs.shape.md) &gt; [billboard](./decentraland-ecs.shape.billboard.md)

# Shape.billboard property

Billboard defines a behavior that makes the entity face the camera in any moment. There are three combinable types of camera facing options defined in the object BillboardModes. BILLBOARDMODE\_NONE: 0 BILLBOARDMODE\_X: 1 BILLBOARDMODE\_Y: 2 BILLBOARDMODE\_Z: 4 BILLBOARDMODE\_ALL: 7

To combine billboard types write those in the form: BillboardModes.BILLBOARDMODE\_X \| BillboardModes.BILLBOARDMODE\_Y

**Signature:**
```javascript
billboard: number
```
