[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [AudioSource](./decentraland-ecs.audiosource.md)

# AudioSource class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`audioClip`](./decentraland-ecs.audiosource.audioclip.md) |  | `AudioClip` |  |
|  [`audioClipId`](./decentraland-ecs.audiosource.audioclipid.md) |  | `string` |  |
|  [`loop`](./decentraland-ecs.audiosource.loop.md) |  | `boolean` | Is this clip looping by default? |
|  [`pitch`](./decentraland-ecs.audiosource.pitch.md) |  | `number` | Pitch, default: 1.0, range from 0.0 to MaxFloat |
|  [`playing`](./decentraland-ecs.audiosource.playing.md) |  | `boolean` | Is this AudioSource playing? |
|  [`volume`](./decentraland-ecs.audiosource.volume.md) |  | `number` | Clip's master volume. This volume affects all the AudioSources. Valid ranges from 0 to 1 |

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(audioClip)`](./decentraland-ecs.audiosource.constructor.md) |  |  | Constructs a new instance of the [AudioSource](./decentraland-ecs.audiosource.md) class |
|  [`playOnce()`](./decentraland-ecs.audiosource.playonce.md) |  | `void` | Disables the looping and plays the current source once. If the sound was playing, it stops and starts over. |

