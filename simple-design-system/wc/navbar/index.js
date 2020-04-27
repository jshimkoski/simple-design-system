const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: grid;

      grid-template-areas:
        "close-btn brand"
        "nav nav"
        "nav-right nav-right";

      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto auto;

      background-color: var(--color-bgcolor);
      border-bottom: var(--border) solid var(--color-gray-300) !important;
    }

    :host([hide-brand]) {
      grid-template-areas:
        "close-btn spacer"
        "nav nav"
        "nav-right nav-right";

        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto auto;
    }

    ::slotted([slot=brand]) {
      grid-area: brand;
      align-self: center;
    }

    div {
      grid-area: close-btn;
      align-self: center;
      margin-left: var(--m-4);
      margin-right: var(--m-4);
    }

    :host([hide-brand]) ::slotted([slot=brand]) {
      display: none;
    }

    button {
      background: 0;
      border: var(--border) solid var(--color-transparent);
      border-radius: var(--rounded);
      fill: var(--color-fgcolor);
      padding: var(--p-1) var(--p-2);
      margin-top: var(--m-2);
      margin-bottom: var(--m-2);
      cursor: pointer;
    }

    button svg {
      margin-top: 2px;
    }

    button:hover,
    button:focus,
    button:active,
    :host([mobile-menu-open]) button {
      outline: none;
      border-color: var(--color-gray-300);
      background-color: var(--color-gray-100);
    }

    ::slotted([slot=nav]) {
      grid-area: nav;
    }

    ::slotted([slot=nav-right]) {
      grid-area: nav-right;
    }

    ::slotted([slot=nav]),
    ::slotted([slot=nav-right]) {
      display: none;
      align-self: center;
      border-top: var(--border) solid var(--color-gray-300) !important;
      padding: var(--p-4);
      height: var(--h-full);
    }

    :host([mobile-menu-open]) ::slotted([slot=nav]),
    :host([mobile-menu-open]) ::slotted([slot=nav-right]) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      :host {
        display: grid;
        gap: var(--p-4);

        grid-template-areas:
          "brand nav nav-right";

        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;

        background-color: var(--color-bgcolor);
        border-bottom: var(--border) solid var(--color-gray-300) !important;
        padding-left: var(--p-8);
        padding-right: var(--p-8);
      }

      :host([hide-brand]) {
        grid-template-areas:
          "nav nav-right";

        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr;
      }

      ::slotted([slot=brand]) {
        padding: var(--p-0);
      }

      ::slotted([slot=nav]),
      ::slotted([slot=nav-right]) {
        display: flex;
        align-items: stretch;
        border: 0 !important;
        padding-top: var(--p-0);
        padding-bottom: var(--p-0);
      }

      :host([mobile-menu-open]) ::slotted([slot=nav]),
      :host([mobile-menu-open]) ::slotted([slot=nav-right]) {
        display: flex;
      }

      div {
        display: none;
      }
    }
  </style>
  <slot name="brand"></slot>
  <div>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>
    </button>
  </div>
  <slot name="nav"></slot>
  <slot name="nav-right"></slot>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(template.content.cloneNode(true));

    this._toggleFn = this._toggle.bind(this);
    this._closeFn = this._close.bind(this);

    this.$menuBtn = this._root.querySelector("button");
    this.$menuBtn.addEventListener("click", this._toggleFn);
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
  }

  _close() {
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
