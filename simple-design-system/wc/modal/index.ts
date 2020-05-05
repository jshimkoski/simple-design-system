import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$closeBtn?: HTMLButtonElement;
  #$backdrop?: HTMLElement;

  #boundCloseFn: any;
  #boundKeyCloseFn: any;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));

    this.#boundCloseFn = this._close.bind(this);
    this.#boundKeyCloseFn = this._keyClose.bind(this);

    this.#$closeBtn = <HTMLButtonElement>this.#root.querySelector(".close-btn");
    this.#$backdrop = <HTMLElement>this.#root.querySelector(".backdrop");

    this.#$closeBtn.addEventListener("click", this.#boundCloseFn);
    this.#$backdrop.addEventListener("click", this.#boundCloseFn);
    document.addEventListener("keyup", this.#boundKeyCloseFn);
  }

  disconnectedCallback() {
    (this.#$closeBtn as HTMLButtonElement).removeEventListener(
      "click",
      this.#boundCloseFn
    );
    (this.#$backdrop as HTMLElement).removeEventListener(
      "click",
      this.#boundCloseFn
    );
    document.removeEventListener("keyup", this.#boundKeyCloseFn);
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(attr: String, oldVal: String, newVal: String) {
    if (attr === "open") {
      if (newVal !== null) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  }

  private _close(e: Event) {
    if (
      e.target !== this.#$closeBtn &&
      !(this.#$closeBtn as HTMLButtonElement).contains(
        e.target as HTMLElement
      ) &&
      e.target !== this.#$backdrop
    )
      return;
    this.open = false;
  }

  private _keyClose(e: KeyboardEvent) {
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
