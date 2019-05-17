[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [GetClipFactor](./decentraland-ecs.vector3.getclipfactor.md)

# Vector3.GetClipFactor method

Get the clip factor between two vectors

**Signature:**
```javascript
static GetClipFactor(vector0: ReadOnlyVector3, vector1: ReadOnlyVector3, axis: ReadOnlyVector3, size: number): number;
```
**Returns:** `number`

the clip factor

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `vector0` | `ReadOnlyVector3` | defines the first operand |
|  `vector1` | `ReadOnlyVector3` | defines the second operand |
|  `axis` | `ReadOnlyVector3` | defines the axis to use |
|  `size` | `number` | defines the size along the axis |

