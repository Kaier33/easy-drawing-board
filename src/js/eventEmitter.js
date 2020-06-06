export class Event {
  constructor() {
    this._event = {};
  }

  on(evName, handler) {
    if (!evName || !handler) return;
    if (!this._event.hasOwnProperty(evName)) this._event[evName] = [];
    this._event[evName].push(handler);
  }

  off(evName, handler) {
    if (!evName || !handler || !this._event.hasOwnProperty(evName)) return;
    const handlerIndex = this._event[evName].indexOf(handler);
    handlerIndex >= 0 && this._event[evName].splice(handlerIndex, 1);
  }

  trigger(evName, evData) {
    if (!evName || !this._event.hasOwnProperty(evName)) return;
    this._event[evName].forEach((fn) => fn(evData));
  }

  removeAllLister() {
    this._event = {};
  }
}
