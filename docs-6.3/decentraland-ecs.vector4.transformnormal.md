<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Vector4](./decentraland-ecs.vector4.md) &gt; [TransformNormal](./decentraland-ecs.vector4.transformnormal.md)

## Vector4.TransformNormal() method

Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector. This methods computes transformed normalized direction vectors only.

<b>Signature:</b>

```typescript
static TransformNormal(vector: ReadOnlyVector4, transformation: Matrix): Vector4;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  vector | <code>ReadOnlyVector4</code> | the vector to transform |
|  transformation | <code>Matrix</code> | the transformation matrix to apply |

<b>Returns:</b>

`Vector4`

the new vector

