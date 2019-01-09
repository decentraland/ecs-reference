[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [DistanceOfPointFromSegment](./decentraland-ecs.vector2.distanceofpointfromsegment.md)

# Vector2.DistanceOfPointFromSegment method

Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".

**Signature:**
```javascript
static DistanceOfPointFromSegment(p: Vector2, segA: Vector2, segB: Vector2): number;
```
**Returns:** `number`

the shortest distance

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `p` | `Vector2` | defines the middle point |
|  `segA` | `Vector2` | defines one point of the segment |
|  `segB` | `Vector2` | defines the other point of the segment |

