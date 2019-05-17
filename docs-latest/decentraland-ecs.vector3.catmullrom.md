[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [CatmullRom](./decentraland-ecs.vector3.catmullrom.md)

# Vector3.CatmullRom method

Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"

**Signature:**
```javascript
static CatmullRom(value1: ReadOnlyVector3, value2: ReadOnlyVector3, value3: ReadOnlyVector3, value4: ReadOnlyVector3, amount: number): Vector3;
```
**Returns:** `Vector3`

the new Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `ReadOnlyVector3` | defines the first control point |
|  `value2` | `ReadOnlyVector3` | defines the second control point |
|  `value3` | `ReadOnlyVector3` | defines the third control point |
|  `value4` | `ReadOnlyVector3` | defines the fourth control point |
|  `amount` | `number` | defines the amount on the spline to use |

