[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Plane](./decentraland-ecs.plane.md) &gt; [isFrontFacingTo](./decentraland-ecs.plane.isfrontfacingto.md)

# Plane.isFrontFacingTo method

Checks if the plane is facing a given direction

**Signature:**
```javascript
isFrontFacingTo(direction: Vector3, epsilon: number): boolean;
```
**Returns:** `boolean`

True is the vector "direction" is the same side than the plane normal.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `direction` | `Vector3` | the direction to check if the plane is facing |
|  `epsilon` | `number` | value the dot product is compared against (returns true if dot &amp;lt;= epsilon) |

