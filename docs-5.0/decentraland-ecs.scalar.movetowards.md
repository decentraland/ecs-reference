[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [MoveTowards](./decentraland-ecs.scalar.movetowards.md)

# Scalar.MoveTowards method

Moves a value current towards target.

This is essentially the same as Mathf.Lerp but instead the function will ensure that the speed never exceeds maxDelta. Negative values of maxDelta pushes the value away from target.

**Signature:**
```javascript
static MoveTowards(current: number, target: number, maxDelta: number): number;
```
**Returns:** `number`

resulting value

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `current` | `number` | current value |
|  `target` | `number` | target value |
|  `maxDelta` | `number` | max distance to move |

