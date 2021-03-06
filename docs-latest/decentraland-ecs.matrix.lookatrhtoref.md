<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [LookAtRHToRef](./decentraland-ecs.matrix.lookatrhtoref.md)

## Matrix.LookAtRHToRef() method

Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up". This function works in right handed mode

<b>Signature:</b>

```typescript
static LookAtRHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  eye | <code>Vector3</code> | defines the final position of the entity |
|  target | <code>Vector3</code> | defines where the entity should look at |
|  up | <code>Vector3</code> | defines the up vector for the entity |
|  result | <code>Matrix</code> | defines the target matrix |

<b>Returns:</b>

`void`

