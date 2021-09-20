export default class EventEmitter {
  constructor() {
    this._event = {}
  }

  on(evtName, handler) {
    const events = this._event
    if (!(evtName in events )) {
      events[evtName] = []
    }
    events[evtName].push(handler)
  }

  off(evtName, handler) {
    const events = this._event
    if (!(evtName in events)) return
    if (!handler) {
      events[evtName] = []
    }
    const handlerIndex = events[evtName].indexOf(handler)
    if (handlerIndex >= 0) {
      events[evtName].splice(handlerIndex, 1)
    }
  }

  trigger(evtName, data) {
    const events = this._event

    if (!events[evtName]) return

    for (let i = 0; i < events[evtName].length; i++) {
      const handler = events[evtName][i]
      handler.call(this, data)
    }
  }

  removeAllListeners() {
    this._event = {}
  }
}
