[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector2](./decentraland-ecs.vector2.md) &gt; [equalsWithEpsilon](./decentraland-ecs.vector2.equalswithepsilon.md)

# Vector2.equalsWithEpsilon method

Gets a boolean if two vectors are equals (using an epsilon value)

**Signature:**
```javascript
equalsWithEpsilon(otherVector: ReadOnlyVector2, epsilon?: number): boolean;
```
**Returns:** `boolean`

true if the given vector coordinates are close to the current ones by a distance of epsilon.

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `otherVector` | `ReadOnlyVector2` | defines the other vector |
|  `epsilon` | `number` | defines the minimal distance to consider equality |

