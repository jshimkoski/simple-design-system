const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    .backdrop {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: var(--h-screen);
      padding: var(--p-0) var(--p-4);
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: var(--z-30);
    }

    .modal {
      z-index: var(--z-40);
      display: block;
      position: relative;
      margin: var(--m-4) var(--m-auto);
      width: var(--w-full);
      background-color: var(--color-gray-100);
      box-shadow: var(--shadows-lg);
      border-radius: var(--rounded);
      border: 1px solid var(--color-border) !important;
    }

    header {
      display: flex;
      align-items: center;
      padding: var(--p-4) var(--p-6);
      border-radius: var(--rounded-t);
      border-bottom: 1px solid var(--color-border) !important;
    }

    header button {
      display: inline-block;
      padding: var(--p-0);
      font-size: var(--text-3xl);
      color: var(--color-gray-500);
      margin-left: var(--m-auto);
      background: 0;
      border: var(--border-0);
      cursor: pointer;
    }

    svg {
      width: var(--w-6);
      height: var(--h-6);
      margin-top: var(--m-2);
    }

    header button:hover,
    header button:focus {
      color: var(--color-gray-700);
      outline: none;
    }

    .title {
      font-size: var(--text-xl);
      line-height: var(--leading-tight);
    }

    ::slotted([slot=content]) {
      padding: var(--p-6) var(--p-6) var(--p-8);
    }

    ::slotted([slot=footer]) {
      padding: var(--p-4) var(--p-6);
      border-radius: var(--rounded-b);
      border-top: 1px solid var(--color-border) !important;
    }

    @media screen and (min-width: 768px) {
      .modal {
        width: var(--w-3-4);
        margin: var(--m-16) var(--m-auto);
      }
    }
  </style>
  <div class="backdrop">
    <div class="modal">
      <header>
        <div class="title"><slot name="title"></slot></div>
        <button aria-label="close" class="close-btn">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </header>
      <slot name="content"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(template.content.cloneNode(true));
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
