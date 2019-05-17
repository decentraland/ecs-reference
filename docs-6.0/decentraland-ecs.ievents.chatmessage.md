[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [IEvents](./decentraland-ecs.ievents.md) &gt; [chatMessage](./decentraland-ecs.ievents.chatmessage.md)

# IEvents.chatMessage property

`chatMessage` is triggered when the user sends a message through chat entity.

**Signature:**
```javascript
chatMessage: {
        id: string;
        sender: string;
        message: string;
        isCommand: boolean;
    }
```
