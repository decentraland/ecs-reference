[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Path2](./decentraland-ecs.path2.md) &gt; [addArcTo](./decentraland-ecs.path2.addarcto.md)

# Path2.addArcTo method

Adds \_numberOfSegments\_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.

**Signature:**
```javascript
addArcTo(midX: number, midY: number, endX: number, endY: number, numberOfSegments?: number): Path2;
```
**Returns:** `Path2`

the updated Path2.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `midX` | `number` | middle point x value |
|  `midY` | `number` | middle point y value |
|  `endX` | `number` | end point x value |
|  `endY` | `number` | end point y value |
|  `numberOfSegments` | `number` | (default: 36) |

