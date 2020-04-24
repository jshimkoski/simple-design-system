const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: flex;
      align-items: stretch;
      padding-top: var(--p-0);
      padding-bottom: var(--p-0);
    }

    ::slotted(a) {
      display: flex;
      align-items: center;
      color: var(--color-gray-600) !important;
      font-size: var(--text-sm) !important;
      padding: var(--p-4) var(--p-3) !important;
      margin-left: var(--m-1) !important;
      margin-right: var(--m-1) !important;
    }

    ::slotted(a:hover),
    ::slotted(a:focus),
    ::slotted(a:active) {
      color: var(--color-fgcolor) !important;
      outline: none !important;
    }

    ::slotted(a.active) {
      color: var(--color-fgcolor) !important;
    }

    /**
     * Color variants
     */

     :host {
      --color-nav-hover: var(--color-bgcolor);
      --color-nav-active: var(--color-fgcolor);
      --bg-nav-hover: var(--color-secondary);
      --bg-nav-active: var(--color-secondary);
    }

    :host([variant=primary]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-primary);
      --bg-nav-active: var(--color-primary);
    }

    :host([variant=success]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-success);
      --bg-nav-active: var(--color-success);
    }

    :host([variant=info]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-info);
      --bg-nav-active: var(--color-info);
    }

    :host([variant=warning]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-warning);
      --bg-nav-active: var(--color-warning);
    }

    :host([variant=danger]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-danger);
      --bg-nav-active: var(--color-danger);
    }

    /**
     * Types
     */

    /* Underline type */

    :host([type=underline]) ::slotted(a) {
      padding: var(--p-4) var(--p-3) var(--p-3) !important;
      border-bottom-width: var(--border-4) !important;
      border-color: var(--color-transparent) !important;
      margin: var(--m-0) var(--m-1) !important;
    }

    :host([type=underline]) ::slotted(a:hover),
    :host([type=underline]) ::slotted(a:focus),
    :host([type=underline]) ::slotted(a:active) {
      outline: none !important;
      border-color: var(--bg-nav-hover) !important;
    }

    :host([type=underline]) ::slotted(a.active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--bg-nav-active) !important;
    }

    /* Pill type */

    :host([type=pill]) ::slotted(a) {
      margin: var(--m-1) var(--m-1) !important;
      padding: var(--p-3) !important;
    }

    :host([type=pill]) ::slotted(a:hover),
    :host([type=pill]) ::slotted(a:focus),
    :host([type=pill]) ::slotted(a:active) {
      border-radius: var(--rounded) !important;
      outline: none !important;
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-hover) !important;
    }

    :host([type=pill]) ::slotted(a.active) {
      border-radius: var(--rounded) !important;
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-active) !important;
    }

    /* Block type */

    :host([type=block]) ::slotted(a) {
      margin: var(--m-0) !important;
      padding: var(--p-4) !important;
    }

    :host([type=block]) ::slotted(a:hover),
    :host([type=block]) ::slotted(a:focus),
    :host([type=block]) ::slotted(a:active) {
      outline: none !important;
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-hover) !important;
    }

    :host([type=block]) ::slotted(a.active) {
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-active) !important;
    }
  </style>
  <slot name="item"></slot>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(template.content.cloneNode(true));
  }

  disconnectedCallback() {}
}

customElements.define("sds-nav", Component);
