[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Curve3](./decentraland-ecs.curve3.md) &gt; [continue](./decentraland-ecs.curve3.continue.md)

# Curve3.continue method

Returns a new instance of Curve3 object : var curve = curveA.continue(curveB); This new Curve3 is built by translating and sticking the curveB at the end of the curveA. curveA and curveB keep unchanged.

**Signature:**
```javascript
continue(curve: Curve3): Curve3;
```
**Returns:** `Curve3`

the newly constructed curve

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `curve` | `Curve3` | the curve to continue from this curve |

