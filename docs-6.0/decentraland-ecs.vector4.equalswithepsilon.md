[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md) &gt; [equalsWithEpsilon](./decentraland-ecs.vector4.equalswithepsilon.md)

# Vector4.equalsWithEpsilon method

Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.

**Signature:**
```javascript
equalsWithEpsilon(otherVector: ReadOnlyVector4, epsilon?: number): boolean;
```
**Returns:** `boolean`

true if they are equal

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `otherVector` | `ReadOnlyVector4` | vector to compare against |
|  `epsilon` | `number` | (Default: very small number) |

