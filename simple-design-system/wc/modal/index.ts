import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$closeBtn?: HTMLButtonElement;
  #$backdrop?: HTMLElement;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));

    this._close = this._close.bind(this);
    this._keyClose = this._keyClose.bind(this);

    this.#$closeBtn = <HTMLButtonElement>this.#root.querySelector(".close-btn");
    this.#$backdrop = <HTMLElement>this.#root.querySelector(".backdrop");

    this.#$closeBtn.addEventListener("click", this._close);
    this.#$backdrop.addEventListener("click", this._close);
  }

  disconnectedCallback() {
    (this.#$closeBtn as HTMLButtonElement).removeEventListener(
      "click",
      this._close
    );
    (this.#$backdrop as HTMLElement).removeEventListener("click", this._close);
    document.removeEventListener("keyup", this._keyClose);
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(attr: String, oldVal: String, newVal: String) {
    if (attr === "open") {
      if (newVal !== null) {
        document.body.style.overflow = "hidden";
        // wait for next pass before listening for events
        // on document
        setTimeout(() => {
          document.addEventListener("keyup", this._keyClose);
        }, 0);
      } else {
        document.body.style.overflow = "visible";
        document.removeEventListener("keyup", this._keyClose);
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
