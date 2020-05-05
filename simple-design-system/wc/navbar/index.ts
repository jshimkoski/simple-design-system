import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$menuBtn?: HTMLButtonElement;
  #$nav?: HTMLElement;
  #$navRight?: HTMLElement;

  #boundCloseFn: any;
  #boundToggleFn: any;
  #boundKeyCloseFn: any;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));

    this.#boundCloseFn = this._close.bind(this);
    this.#boundToggleFn = this._toggle.bind(this);
    this.#boundKeyCloseFn = this._keyClose.bind(this);

    this.#$menuBtn = <HTMLButtonElement>this.#root.querySelector("button");
    this.#$menuBtn.addEventListener("click", this.#boundToggleFn);
    this.#$menuBtn.setAttribute("type", "button");
    this.#$menuBtn.setAttribute("aria-label", "navbar menu toggle");
    this.#$menuBtn.setAttribute("aria-haspopup", "true");
    this.#$menuBtn.setAttribute("aria-expanded", `${this.mobileMenuOpen}`);

    this.#$nav = <HTMLElement>this.#root.querySelector('slot[name="nav"]');
    this.#$nav.addEventListener("click", this.#boundCloseFn);

    this.#$navRight = <HTMLElement>(
      this.#root.querySelector('slot[name="nav-right"]')
    );
    this.#$navRight.addEventListener("click", this.#boundCloseFn);

    document.addEventListener("keyup", this.#boundKeyCloseFn);
  }

  disconnectedCallback() {
    (this.#$menuBtn as HTMLButtonElement).removeEventListener(
      "click",
      this.#boundToggleFn
    );
  }

  private _toggle() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    (this.#$menuBtn as HTMLButtonElement).setAttribute(
      "aria-expanded",
      `${this.mobileMenuOpen}`
    );
  }

  private _close(e: Event) {
    const tagName = (e.target as HTMLElement).tagName.toLowerCase();
    const type = (e.target as HTMLElement).getAttribute("type");
    const isInput = tagName === "input" && type === "text";
    const isNav = tagName === "sds-nav" || tagName === "nav";
    if (isInput || isNav) return;
    this.mobileMenuOpen = false;
  }

  private _keyClose(e: KeyboardEvent) {
    if (e.keyCode !== 27) return;
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
