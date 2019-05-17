[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Observable](./decentraland-ecs.observable.md)

# Observable class

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

The Observable class is a simple implementation of the Observable pattern.

There's one slight particularity though: a given Observable can notify its observer using a particular mask value, only the Observers registered with this mask value will be notified. This enable a more fine grained execution without having to rely on multiple different Observable objects. For instance you may have a given Observable that have four different types of notifications: Move (mask = 0x01), Stop (mask = 0x02), Turn Right (mask = 0X04), Turn Left (mask = 0X08). A given observer can register itself with only Move and Stop (mask = 0x03), then it will only be notified when one of these two occurs and will never be for Turn Left/Right.

## Methods

|  Method | Access Modifier | Returns | Description |
|  --- | --- | --- | --- |
|  [`constructor(onObserverAdded)`](./decentraland-ecs.observable.constructor.md) |  |  | Creates a new observable |
|  [`add(callback, mask, insertFirst, scope, unregisterOnFirstCall)`](./decentraland-ecs.observable.add.md) |  | `null | Observer<T>` | Create a new Observer with the specified callback |
|  [`addOnce(callback)`](./decentraland-ecs.observable.addonce.md) |  | `null | Observer<T>` | Create a new Observer with the specified callback and unregisters after the next notification |
|  [`clear()`](./decentraland-ecs.observable.clear.md) |  | `void` | Clear the list of observers |
|  [`clone()`](./decentraland-ecs.observable.clone.md) |  | `Observable<T>` | Clone the current observable |
|  [`hasObservers()`](./decentraland-ecs.observable.hasobservers.md) |  | `boolean` | Gets a boolean indicating if the observable has at least one observer |
|  [`hasSpecificMask(mask)`](./decentraland-ecs.observable.hasspecificmask.md) |  | `boolean` | Does this observable handles observer registered with a given mask |
|  [`notifyObserver(observer, eventData, mask)`](./decentraland-ecs.observable.notifyobserver.md) |  | `void` | Notify a specific observer |
|  [`notifyObservers(eventData, mask, target, currentTarget)`](./decentraland-ecs.observable.notifyobservers.md) |  | `boolean` | Notify all Observers by calling their respective callback with the given data Will return true if all observers were executed, false if an observer set skipNextObservers to true, then prevent the subsequent ones to execute |
|  [`notifyObserversWithPromise(eventData, mask, target, currentTarget)`](./decentraland-ecs.observable.notifyobserverswithpromise.md) |  | `Promise<T>` | Calling this will execute each callback, expecting it to be a promise or return a value. If at any point in the chain one function fails, the promise will fail and the execution will not continue. This is useful when a chain of events (sometimes async events) is needed to initialize a certain object and it is crucial that all callbacks will be executed. The order of the callbacks is kept, callbacks are not executed parallel. |
|  [`remove(observer)`](./decentraland-ecs.observable.remove.md) |  | `boolean` | Remove an Observer from the Observable object |
|  [`removeCallback(callback, scope)`](./decentraland-ecs.observable.removecallback.md) |  | `boolean` | Remove a callback from the Observable object |

