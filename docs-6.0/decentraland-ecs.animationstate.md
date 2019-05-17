[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [AnimationState](./decentraland-ecs.animationstate.md)

# AnimationState class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`clip`](./decentraland-ecs.animationstate.clip.md) |  | `string` | Name of the animation in the model |
|  [`looping`](./decentraland-ecs.animationstate.looping.md) |  | `boolean` | Does the animation loop?, default: true |
|  [`playing`](./decentraland-ecs.animationstate.playing.md) |  | `boolean` | Is the animation playing? default: true |
|  [`shouldReset`](./decentraland-ecs.animationstate.shouldreset.md) |  | `boolean` | Does any anyone asked to reset the animation? default: false |
|  [`speed`](./decentraland-ecs.animationstate.speed.md) |  | `number` | The animation speed |
|  [`weight`](./decentraland-ecs.animationstate.weight.md) |  | `number` | Weight of the animation, values from 0 to 1, used to blend several animations. default: 1 |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(clip, params)`](./decentraland-ecs.animationstate.constructor.md) |  |  | Constructs a new instance of the [AnimationState](./decentraland-ecs.animationstate.md) class |
|  [`pause()`](./decentraland-ecs.animationstate.pause.md) |  | `void` | Pauses the animation |
|  [`play()`](./decentraland-ecs.animationstate.play.md) |  | `void` | Starts the animation |
|  [`reset()`](./decentraland-ecs.animationstate.reset.md) |  | `void` | Resets the animation state to the frame 0 |
|  [`setParams(params)`](./decentraland-ecs.animationstate.setparams.md) |  | `void` | Sets the clip parameters |
|  [`stop()`](./decentraland-ecs.animationstate.stop.md) |  | `void` | Resets and pauses the animation |
|  [`toJSON()`](./decentraland-ecs.animationstate.tojson.md) |  | `any` |  |

