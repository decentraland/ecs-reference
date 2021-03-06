<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observer](./decentraland-ecs.observer.md) &gt; [(constructor)](./decentraland-ecs.observer.(constructor).md)

## Observer.(constructor)

Creates a new observer

<b>Signature:</b>

```typescript
constructor(
    callback: (eventData: T, eventState: ObserverEventState) => void, 
    mask: number, 
    scope?: any);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  callback | <code>(eventData: T, eventState: ObserverEventState) =&gt; void</code> | defines the callback to call when the observer is notified |
|  mask | <code>number</code> | defines the mask of the observer (used to filter notifications) |
|  scope | <code>any</code> | defines the current scope used to restore the JS context |

