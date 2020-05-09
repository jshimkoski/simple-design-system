import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$menuBtn?: HTMLButtonElement;
  #$nav?: HTMLElement;
  #$navRight?: HTMLElement;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));

    this._close = this._close.bind(this);
    this._toggle = this._toggle.bind(this);
    this._keyClose = this._keyClose.bind(this);

    this.#$menuBtn = <HTMLButtonElement>this.#root.querySelector("button");
    this.#$menuBtn.setAttribute("type", "button");
    this.#$menuBtn.setAttribute("aria-label", "navbar menu toggle");
    this.#$menuBtn.setAttribute("aria-haspopup", "true");
    this.#$menuBtn.setAttribute("aria-expanded", `${this.mobileMenuOpen}`);

    this.#$nav = <HTMLElement>this.#root.querySelector('slot[name="nav"]');

    this.#$navRight = <HTMLElement>(
      this.#root.querySelector('slot[name="nav-right"]')
    );

    this.#$menuBtn.addEventListener("click", this._toggle);
    this.#$nav.addEventListener("click", this._close);
    this.#$navRight.addEventListener("click", this._close);
  }

  disconnectedCallback() {
    (this.#$menuBtn as HTMLButtonElement).removeEventListener(
      "click",
      this._toggle
    );
    (this.#$nav as HTMLElement).removeEventListener("click", this._close);
    (this.#$navRight as HTMLElement).removeEventListener("click", this._close);
    document.removeEventListener("keyup", this._keyClose);
  }

  static get observedAttributes() {
    return ["mobile-menu-open"];
  }

  attributeChangedCallback(attr: String, oldVal: String, newVal: String) {
    if (attr === "mobile-menu-open") {
      if (newVal !== null) {
        // wait for next pass before listening for events
        // on document
        setTimeout(() => {
          document.addEventListener("keyup", this._keyClose);
        }, 0);
      } else {
        document.removeEventListener("keyup", this._keyClose);
      }
    }
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

  set mobileMenuOpen(val) {
    if (val) {
      this.setAttribute("mobile-menu-open", "");
    } else {
      this.removeAttribute("mobile-menu-open");
    }
    const event = new CustomEvent("mobile-menu-open", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get mobileMenuOpen() {
    return this.hasAttribute("mobile-menu-open");
  }
}

customElements.define("sds-navbar", Component);
