[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md)

# IEvents interface

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [`chatMessage`](./decentraland-ecs.ievents.chatmessage.md) | `{`<p/>`        id: string;`<p/>`        sender: string;`<p/>`        message: string;`<p/>`        isCommand: boolean;`<p/>`    }` | `chatMessage` is triggered when the user sends a message through chat entity. |
|  [`entitiesOutOfBoundaries`](./decentraland-ecs.ievents.entitiesoutofboundaries.md) | `{`<p/>`        entities: string[];`<p/>`    }` | After checking entities outside the fences, if any is outside, this event will be triggered with all the entities outside the scene. |
|  [`entityBackInScene`](./decentraland-ecs.ievents.entitybackinscene.md) | `{`<p/>`        entityId: string;`<p/>`    }` | This event gets triggered when an entity enters the scene fences. |
|  [`entityOutOfScene`](./decentraland-ecs.ievents.entityoutofscene.md) | `{`<p/>`        entityId: string;`<p/>`    }` | This event gets triggered when an entity leaves the scene fences. |
|  [`gizmoEvent`](./decentraland-ecs.ievents.gizmoevent.md) | `GizmoDragEndEvent | GizmoSelectedEvent` | For gizmos |
|  [`limitsExceeded`](./decentraland-ecs.ievents.limitsexceeded.md) | `{`<p/>`        given: Record<string, number>;`<p/>`        limit: Record<string, number>;`<p/>`    }` |  |
|  [`metricsUpdate`](./decentraland-ecs.ievents.metricsupdate.md) | `{`<p/>`        given: Record<string, number>;`<p/>`        limit: Record<string, number>;`<p/>`    }` |  |
|  [`onAnimationEnd`](./decentraland-ecs.ievents.onanimationend.md) | `{`<p/>`        clipName: string;`<p/>`    }` | `onAnimationEnd` is triggered when an animation clip gets finish |
|  [`onBlur`](./decentraland-ecs.ievents.onblur.md) | `{`<p/>`        /** ID of the entitiy of the event */`<p/>`        entityId: string;`<p/>`        /** ID of the pointer that triggered the event */`<p/>`        pointerId: number;`<p/>`    }` | `onBlur` is triggered when an entity loses its focus. Dispatched by the `ui-input` and `ui-password` entities when the value is changed. It triggers a callback.<p/>Notice: Only entities with ID will be listening for click events. |
|  [`onChange`](./decentraland-ecs.ievents.onchange.md) | `{`<p/>`        value?: any;`<p/>`        /** ID of the pointer that triggered the event */`<p/>`        pointerId?: number;`<p/>`    }` | `onChange` is triggered when an entity changes its own internal state. Dispatched by the `ui-*` entities when their value is changed. It triggers a callback. Notice: Only entities with ID will be listening for click events. |
|  [`onClick`](./decentraland-ecs.ievents.onclick.md) | `{`<p/>`        entityId: string;`<p/>`    }` | The onClick event is only used for UI elements |
|  [`onFocus`](./decentraland-ecs.ievents.onfocus.md) | `{`<p/>`        /** ID of the entitiy of the event */`<p/>`        entityId: string;`<p/>`        /** ID of the pointer that triggered the event */`<p/>`        pointerId: number;`<p/>`    }` | `onFocus` is triggered when an entity focus is active. Dispatched by the `ui-input` and `ui-password` entities when the value is changed. It triggers a callback.<p/>Notice: Only entities with ID will be listening for click events. |
|  [`onTextSubmit`](./decentraland-ecs.ievents.ontextsubmit.md) | `{`<p/>`        text: string;`<p/>`    }` |  |
|  [`pointerDown`](./decentraland-ecs.ievents.pointerdown.md) | `PointerEvent` | `pointerDown` is triggered when the user press an input pointer. It could be a VR controller, a touch screen or the mouse. |
|  [`pointerUp`](./decentraland-ecs.ievents.pointerup.md) | `PointerEvent` | `pointerUp` is triggered when the user releases an input pointer. It could be a VR controller, a touch screen or the mouse. |
|  [`positionChanged`](./decentraland-ecs.ievents.positionchanged.md) | `{`<p/>`        /** Position relative to the base parcel of the scene */`<p/>`        position: ReadOnlyVector3;`<p/>`        /** Camera position, this is a absolute world position */`<p/>`        cameraPosition: ReadOnlyVector3;`<p/>`        /** Eye height, in meters. */`<p/>`        playerHeight: number;`<p/>`    }` | `positionChanged` is triggered when the position of the camera changes This event is throttled to 10 times per second. |
|  [`rotationChanged`](./decentraland-ecs.ievents.rotationchanged.md) | `{`<p/>`        /** Degree vector. Same as entities */`<p/>`        rotation: ReadOnlyVector3;`<p/>`        /** Rotation quaternion, useful in some scenarios. */`<p/>`        quaternion: ReadOnlyQuaternion;`<p/>`    }` | `rotationChanged` is triggered when the rotation of the camera changes. This event is throttled to 10 times per second. |
|  [`uuidEvent`](./decentraland-ecs.ievents.uuidevent.md) | `{`<p/>`        uuid: string;`<p/>`        payload: any;`<p/>`    }` |  |

