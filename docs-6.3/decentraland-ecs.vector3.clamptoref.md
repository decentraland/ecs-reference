<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector3](./decentraland-ecs.vector3.md) &gt; [ClampToRef](./decentraland-ecs.vector3.clamptoref.md)

## Vector3.ClampToRef() method

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max" If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

<b>Signature:</b>

```typescript
static ClampToRef(value: ReadOnlyVector3, min: ReadOnlyVector3, max: ReadOnlyVector3, result: Vector3): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  value | <code>ReadOnlyVector3</code> | defines the current value |
|  min | <code>ReadOnlyVector3</code> | defines the lower range value |
|  max | <code>ReadOnlyVector3</code> | defines the upper range value |
|  result | <code>Vector3</code> | defines the Vector3 where to store the result |

<b>Returns:</b>

`void`
