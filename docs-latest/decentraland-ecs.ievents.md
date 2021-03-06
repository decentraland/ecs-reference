<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md)

## IEvents interface


<b>Signature:</b>

```typescript
export interface IEvents 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [chatMessage](./decentraland-ecs.ievents.chatmessage.md) | <code>{</code><br/><code>        id: string;</code><br/><code>        sender: string;</code><br/><code>        message: string;</code><br/><code>        isCommand: boolean;</code><br/><code>    }</code> | <code>chatMessage</code> is triggered when the user sends a message through chat entity. |
|  [comms](./decentraland-ecs.ievents.comms.md) | <code>{</code><br/><code>        sender: string;</code><br/><code>        message: string;</code><br/><code>    }</code> | This event gets triggered after receiving a comms message. |
|  [entitiesOutOfBoundaries](./decentraland-ecs.ievents.entitiesoutofboundaries.md) | <code>{</code><br/><code>        entities: string[];</code><br/><code>    }</code> | After checking entities outside the fences, if any is outside, this event will be triggered with all the entities outside the scene. |
|  [entityBackInScene](./decentraland-ecs.ievents.entitybackinscene.md) | <code>{</code><br/><code>        entityId: string;</code><br/><code>    }</code> | This event gets triggered when an entity enters the scene fences. |
|  [entityOutOfScene](./decentraland-ecs.ievents.entityoutofscene.md) | <code>{</code><br/><code>        entityId: string;</code><br/><code>    }</code> | This event gets triggered when an entity leaves the scene fences. |
|  [gizmoEvent](./decentraland-ecs.ievents.gizmoevent.md) | <code>GizmoDragEndEvent &#124; GizmoSelectedEvent</code> | For gizmos |
|  [limitsExceeded](./decentraland-ecs.ievents.limitsexceeded.md) | <code>{</code><br/><code>        given: Record&lt;string, number&gt;;</code><br/><code>        limit: Record&lt;string, number&gt;;</code><br/><code>    }</code> |  |
|  [metricsUpdate](./decentraland-ecs.ievents.metricsupdate.md) | <code>{</code><br/><code>        given: Record&lt;string, number&gt;;</code><br/><code>        limit: Record&lt;string, number&gt;;</code><br/><code>    }</code> |  |
|  [onAnimationEnd](./decentraland-ecs.ievents.onanimationend.md) | <code>{</code><br/><code>        clipName: string;</code><br/><code>    }</code> | <code>onAnimationEnd</code> is triggered when an animation clip gets finish |
|  [onBlur](./decentraland-ecs.ievents.onblur.md) | <code>{</code><br/><code>        entityId: string;</code><br/><code>        pointerId: number;</code><br/><code>    }</code> | <code>onBlur</code> is triggered when an entity loses its focus. Dispatched by the <code>ui-input</code> and <code>ui-password</code> entities when the value is changed. It triggers a callback.<!-- -->Notice: Only entities with ID will be listening for click events. |
|  [onChange](./decentraland-ecs.ievents.onchange.md) | <code>{</code><br/><code>        value?: any;</code><br/><code>        pointerId?: number;</code><br/><code>    }</code> | <code>onChange</code> is triggered when an entity changes its own internal state. Dispatched by the <code>ui-*</code> entities when their value is changed. It triggers a callback. Notice: Only entities with ID will be listening for click events. |
|  [onClick](./decentraland-ecs.ievents.onclick.md) | <code>{</code><br/><code>        entityId: string;</code><br/><code>    }</code> | The onClick event is only used for UI elements |
|  [onEnter](./decentraland-ecs.ievents.onenter.md) | <code>{}</code> | <code>onEnter</code> is triggered when the user hits the "Enter" key from the keyboard Used principally by the Chat internal scene |
|  [onFocus](./decentraland-ecs.ievents.onfocus.md) | <code>{</code><br/><code>        entityId: string;</code><br/><code>        pointerId: number;</code><br/><code>    }</code> | <code>onFocus</code> is triggered when an entity focus is active. Dispatched by the <code>ui-input</code> and <code>ui-password</code> entities when the value is changed. It triggers a callback.<!-- -->Notice: Only entities with ID will be listening for click events. |
|  [onTextSubmit](./decentraland-ecs.ievents.ontextsubmit.md) | <code>{</code><br/><code>        text: string;</code><br/><code>    }</code> |  |
|  [pointerDown](./decentraland-ecs.ievents.pointerdown.md) | <code>InputEventResult</code> | <code>pointerDown</code> is triggered when the user press an input pointer. It could be a VR controller, a touch screen or the mouse. |
|  [pointerEvent](./decentraland-ecs.ievents.pointerevent.md) | <code>GlobalInputEventResult</code> | <code>pointerEvent</code> is triggered when the user press or releases an input pointer. It could be a VR controller, a touch screen or the mouse. |
|  [pointerUp](./decentraland-ecs.ievents.pointerup.md) | <code>InputEventResult</code> | <code>pointerUp</code> is triggered when the user releases an input pointer. It could be a VR controller, a touch screen or the mouse. |
|  [positionChanged](./decentraland-ecs.ievents.positionchanged.md) | <code>{</code><br/><code>        position: ReadOnlyVector3;</code><br/><code>        cameraPosition: ReadOnlyVector3;</code><br/><code>        playerHeight: number;</code><br/><code>    }</code> | <code>positionChanged</code> is triggered when the position of the camera changes This event is throttled to 10 times per second. |
|  [rotationChanged](./decentraland-ecs.ievents.rotationchanged.md) | <code>{</code><br/><code>        rotation: ReadOnlyVector3;</code><br/><code>        quaternion: ReadOnlyQuaternion;</code><br/><code>    }</code> | <code>rotationChanged</code> is triggered when the rotation of the camera changes. This event is throttled to 10 times per second. |
|  [sceneStart](./decentraland-ecs.ievents.scenestart.md) | <code>{}</code> | This is triggered once the scene should start. |
|  [uuidEvent](./decentraland-ecs.ievents.uuidevent.md) | <code>{</code><br/><code>        uuid: string;</code><br/><code>        payload: any;</code><br/><code>    }</code> |  |

