<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Matrix](./decentraland-ecs.matrix.md) &gt; [PerspectiveFovWebVRToRef](./decentraland-ecs.matrix.perspectivefovwebvrtoref.md)

## Matrix.PerspectiveFovWebVRToRef() method

Stores a perspective projection for WebVR info a given matrix

<b>Signature:</b>

```typescript
static PerspectiveFovWebVRToRef(fov: {
        upDegrees: number;
        downDegrees: number;
        leftDegrees: number;
        rightDegrees: number;
    }, znear: number, zfar: number, result: Matrix, rightHanded?: boolean): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fov | <code>{</code><br/><code>        upDegrees: number;</code><br/><code>        downDegrees: number;</code><br/><code>        leftDegrees: number;</code><br/><code>        rightDegrees: number;</code><br/><code>    }</code> | defines the field of view |
|  znear | <code>number</code> | defines the near clip plane |
|  zfar | <code>number</code> | defines the far clip plane |
|  result | <code>Matrix</code> | defines the target matrix |
|  rightHanded | <code>boolean</code> | defines if the matrix must be in right-handed mode (false by default) |

<b>Returns:</b>

`void`
