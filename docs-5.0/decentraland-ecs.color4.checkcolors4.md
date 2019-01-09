[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Color4](./decentraland-ecs.color4.md) &gt; [CheckColors4](./decentraland-ecs.color4.checkcolors4.md)

# Color4.CheckColors4 method

Check the content of a given array and convert it to an array containing RGBA data If the original array was already containing count \* 4 values then it is returned directly

**Signature:**
```javascript
static CheckColors4(colors: number[], count: number): number[];
```
**Returns:** `number[]`

an array containing count \* 4 values (RGBA)

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `colors` | `number[]` | defines the array to check |
|  `count` | `number` | defines the number of RGBA data to expect |

