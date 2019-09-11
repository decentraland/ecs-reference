<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Quaternion](./decentraland-ecs.quaternion.md) &gt; [RotationYawPitchRollToRef](./decentraland-ecs.quaternion.rotationyawpitchrolltoref.md)

## Quaternion.RotationYawPitchRollToRef() method

Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion

<b>Signature:</b>

```typescript
static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  yaw | <code>number</code> | defines the rotation around Y axis |
|  pitch | <code>number</code> | defines the rotation around X axis |
|  roll | <code>number</code> | defines the rotation around Z axis |
|  result | <code>Quaternion</code> | defines the target quaternion |

<b>Returns:</b>

`void`
