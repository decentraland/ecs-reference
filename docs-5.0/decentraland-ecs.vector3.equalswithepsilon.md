[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [equalsWithEpsilon](./decentraland-ecs.vector3.equalswithepsilon.md)

# Vector3.equalsWithEpsilon method

Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon

**Signature:**
```javascript
equalsWithEpsilon(otherVector: ReadOnlyVector3, epsilon?: number): boolean;
```
**Returns:** `boolean`

true if both vectors are distant less than epsilon

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `otherVector` | `ReadOnlyVector3` | defines the second operand |
|  `epsilon` | `number` | defines the minimal distance to define values as equals |

