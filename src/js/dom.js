class Dom {
  static createEl( elName = 'div', {styles = {}, attrs = {}, props = {}}) {
    let el = document.createElement(elName)
    Object.keys(styles).map(keys => {
      el.style[keys] = styles[keys]
    })
    Object.keys(attrs).map(keys => {
      el.setAttribute(keys, attrs[keys])
    })
    Object.keys(props).map(keys => {
      el[keys] = props[keys]
    })
    return el
  }

  static hasClass(el, className) {
    return el.classList.contains(className)
  }
  static addClass(el, className) {
    el.classList.add(className)
  }
  static removeClass(el, className) {
    el.classList.remove(className)
  }

  static setAttr(el, attr, attrVal) {
    el.setAttribute(attr, attrVal)
  }
  static delAttr(el, attr) {
    el.removeAttribute(attr)
  }

  static appendChild(parentEl, childEl) {
    parentEl.appendChild(childEl)
  }
  static removeChild(parentEl, childEl) {
    parentEl.removeChild(childEl)
  }
}
export default Dom