import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(templateEl.content.cloneNode(true));
    this.$closeBtn = this._root.querySelector("button");
    this._closeFn = this._close.bind(this);
    this.$closeBtn.addEventListener("click", this._closeFn);
    this.defaultFadeTime = 250;
  }

  disconnectedCallback() {
    this.$closeBtn.removeEventListener("click", this._closeFn);
  }

  /**
   * Custom functions
   */

  _close() {
    this.show = false;
  }

  /**
   * Attribute/property reflection getters/setters
   */

  // fade

  set fade(val) {
    if (val) {
      this.setAttribute("fade", "");
    } else {
      this.removeAttribute("fade");
    }
  }

  get fade() {
    return this.hasAttribute("fade");
  }

  // fadeTime

  set fadeTime(val) {
    if (val) {
      this.setAttribute("fade-time", val);
    } else {
      this.removeAttribute("fade-time");
    }
  }

  get fadeTime() {
    const val = this.getAttribute("fade-time");
    const tmpFadeTime = parseInt(val, 10);
    const fadeTime = Number.isFinite(tmpFadeTime)
      ? tmpFadeTime
      : this.defaultFadeTime;
    return fadeTime;
  }

  // dismissable

  set dismissable(val) {
    if (val) {
      this.setAttribute("dismissable", "");
    } else {
      this.removeAttribute("dismissable");
    }
  }

  get dismissable() {
    return this.hasAttribute("dismissable");
  }

  // show
  // TODO: FIGURE OUT THE DAMN FADE ANIMATION

  static get observedAttributes() {
    return ["show"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "show" && this.fade) {
      if (newVal !== null) {
        setTimeout(() => {
          this.style.opacity = "0";
          this.style.transition = `opacity ${this.fadeTime}ms linear`;
          this.style.opacity = "1";
        }, 0);
      } else {
        setTimeout(() => {
          this.style.opacity = "1";
          this.style.transition = `opacity ${this.fadeTime}ms linear`;
          this.style.opacity = "0";
        }, 0);
      }
    }
  }

  set show(val) {
    if (val) {
      this.setAttribute("show", "");
    } else {
      this.removeAttribute("show");
    }
  }

  get show() {
    return this.hasAttribute("show");
  }
}

customElements.define("sds-alert", Component);
