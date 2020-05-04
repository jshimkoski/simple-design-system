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

    this._toggleFn = this._toggle.bind(this);
    this._closeFn = this._close.bind(this);

    this.$menuBtn = this._root.querySelector("button");
    this.$menuBtn.addEventListener("click", this._toggleFn);
    this.$menuBtn.setAttribute("type", "button");
    this.$menuBtn.setAttribute("aria-label", "navbar menu toggle");
    this.$menuBtn.setAttribute("aria-haspopup", true);
    this.$menuBtn.setAttribute("aria-expanded", this.mobileMenuOpen);

    this.$nav = this._root.querySelector('slot[name="nav"]');
    this.$nav.addEventListener("click", this._closeFn);
    this.$navRight = this._root.querySelector('slot[name="nav-right"]');
    this.$navRight.addEventListener("click", this._closeFn);
  }

  disconnectedCallback() {
    this.$menuBtn.removeEventListener("click", this._toggleFn);
  }

  _toggle() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.$menuBtn.setAttribute("aria-expanded", this.mobileMenuOpen);
  }

  _close(e) {
    const tagName = e.target.tagName.toLowerCase();
    const type = e.target.getAttribute("type");
    const isInput = tagName === "input" && type === "text";
    const isNav = tagName === "sds-nav" || tagName === "nav";
    if (isInput || isNav) return;
    this.mobileMenuOpen = false;
  }

  static get observedAttributes() {
    return ["mobile-menu-open"];
  }

  set mobileMenuOpen(val) {
    if (val) {
      this.setAttribute("mobile-menu-open", "");
    } else {
      this.removeAttribute("mobile-menu-open");
    }
  }

  get mobileMenuOpen() {
    return this.hasAttribute("mobile-menu-open");
  }
}

customElements.define("sds-navbar", Component);
