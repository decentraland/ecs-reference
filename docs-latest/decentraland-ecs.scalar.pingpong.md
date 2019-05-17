[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Scalar](./decentraland-ecs.scalar.md) &gt; [PingPong](./decentraland-ecs.scalar.pingpong.md)

# Scalar.PingPong method

PingPongs the value t, so that it is never larger than length and never smaller than 0.

**Signature:**
```javascript
static PingPong(tx: number, length: number): number;
```
**Returns:** `number`

The returned value will move back and forth between 0 and length

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `tx` | `number` | value |
|  `length` | `number` | length |

