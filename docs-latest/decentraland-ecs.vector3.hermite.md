[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [Hermite](./decentraland-ecs.vector3.hermite.md)

# Vector3.Hermite method

Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"

**Signature:**
```javascript
static Hermite(value1: ReadOnlyVector3, tangent1: ReadOnlyVector3, value2: ReadOnlyVector3, tangent2: ReadOnlyVector3, amount: number): Vector3;
```
**Returns:** `Vector3`

the new Vector3

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `value1` | `ReadOnlyVector3` | defines the first control point |
|  `tangent1` | `ReadOnlyVector3` | defines the first tangent vector |
|  `value2` | `ReadOnlyVector3` | defines the second control point |
|  `tangent2` | `ReadOnlyVector3` | defines the second tangent vector |
|  `amount` | `number` | defines the amount on the interpolation spline (between 0 and 1) |

