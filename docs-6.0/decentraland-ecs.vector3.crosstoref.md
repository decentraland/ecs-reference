[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [CrossToRef](./decentraland-ecs.vector3.crosstoref.md)

# Vector3.CrossToRef method

Sets the given vector "result" with the cross product of "left" and "right" The cross product is then orthogonal to both "left" and "right"

**Signature:**
```javascript
static CrossToRef(left: ReadOnlyVector3, right: ReadOnlyVector3, result: Vector3): void;
```
**Returns:** `void`

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `left` | `ReadOnlyVector3` | defines the left operand |
|  `right` | `ReadOnlyVector3` | defines the right operand |
|  `result` | `Vector3` | defines the Vector3 where to store the result |

