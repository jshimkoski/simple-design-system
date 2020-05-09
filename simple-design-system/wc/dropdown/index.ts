import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$btn?: HTMLButtonElement;
  #$nav?: HTMLElement;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));

    this._close = this._close.bind(this);
    this._toggle = this._toggle.bind(this);
    this._keyClose = this._keyClose.bind(this);
    this._outsideClose = this._outsideClose.bind(this);

    this.#$btn = <HTMLButtonElement>(
      this.#root?.querySelector('slot[name="button"]')
    );
    this.#$btn.setAttribute("type", "button");
    this.#$btn.setAttribute("aria-label", "dropdown menu toggle");
    this.#$btn.setAttribute("aria-haspopup", "true");
    this.#$btn.setAttribute("aria-expanded", `${this.open}`);

    this.#$nav = <HTMLElement>this.#root.querySelector('slot[name="nav"]');

    this.#$btn.addEventListener("click", this._toggle);
    this.#$nav.addEventListener("click", this._close);
  }

  disconnectedCallback() {
    this.#$btn?.removeEventListener("click", this._toggle);
    this.#$nav?.removeEventListener("click", this._close);
    document.removeEventListener("keyup", this._keyClose);
    document.removeEventListener("click", this._outsideClose);
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(attr: String, oldVal: String, newVal: String) {
    if (attr === "open") {
      if (newVal !== null) {
        // wait for next pass before listening for events
        // on document
        setTimeout(() => {
          document.addEventListener("keyup", this._keyClose);
          document.addEventListener("click", this._outsideClose);
        }, 0);
      } else {
        document.removeEventListener("keyup", this._keyClose);
        document.removeEventListener("click", this._outsideClose);
      }
      this._forceDomUpdate();
    }
  }

  private _toggle(e: Event) {
    e.preventDefault();
    this.open = !this.open;
    this.#$btn?.setAttribute("aria-expanded", `${this.open}`);
  }

  private _close(e: Event) {
    this.open = false;
  }

  private _outsideClose(e: Event) {
    if (this === e.target || this.contains(e.target as HTMLElement)) return;
    this.open = false;
  }

  private _keyClose(e: KeyboardEvent) {
    if (e.keyCode !== 27) return;
    this.open = false;
  }

  private _forceDomUpdate() {
    /**
     * This is dumb since the open attr
     * handles this for other browsers but
     * Safari on mac and iOS don't update
     * properly unless we change a style
     */
    (this.#$nav as HTMLElement).style.display = this.open ? "block" : "none";
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

customElements.define("sds-dropdown", Component);