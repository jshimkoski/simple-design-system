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
    this._closeFn = this._close.bind(this);
    this._keyCloseFn = this._keyClose.bind(this);

    this.$closeBtn = this._root.querySelector(".close-btn");
    this.$closeBtn.addEventListener("click", this._closeFn);

    this.$backdrop = this._root.querySelector(".backdrop");
    this.$backdrop.addEventListener("click", this._closeFn);

    document.addEventListener("keyup", this._keyCloseFn);
  }

  disconnectedCallback() {
    this.$closeBtn.removeEventListener("click", this._closeFn);
    this.$backdrop.removeEventListener("click", this._closeFn);
    document.removeEventListener("keyup", this._keyCloseFn);
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "open") {
      if (newVal !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  }

  _close(e) {
    if (
      e.target !== this.$closeBtn &&
      !this.$closeBtn.contains(e.target) &&
      e.target !== this.$backdrop
    )
      return;
    this.open = false;
  }

  _keyClose(e) {
    if (e.keyCode !== 27) return;
    this.open = false;
  }

  set open(val) {
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
    const event = new CustomEvent("open", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get open() {
    return this.hasAttribute("open");
  }
}

customElements.define("sds-modal", Component);
