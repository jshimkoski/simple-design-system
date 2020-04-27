const template = document.createElement("template");

template.innerHTML = `
  <style>
    /**
     * Color variants
     */

    :host {
      --color-variant: var(--color-fgcolor);
      --color-on-variant: var(--color-bg-color);
    }

    :host([variant=blue]) {
      --color-variant: var(--color-blue);
      --color-on-variant: var(--color-white);
    }

    :host([variant=green]) {
      --color-variant: var(--color-green);
      --color-on-variant: var(--color-white);
    }

    :host([variant=indigo]) {
      --color-variant: var(--color-indigo);
      --color-on-variant: var(--color-white);
    }

    :host([variant=orange]) {
      --color-variant: var(--color-orange);
      --color-on-variant: var(--color-white);
    }

    :host([variant=pink]) {
      --color-variant: var(--color-pink);
      --color-on-variant: var(--color-white);
    }

    :host([variant=purple]) {
      --color-variant: var(--color-purple);
      --color-on-variant: var(--color-white);
    }

    :host([variant=red]) {
      --color-variant: var(--color-red);
      --color-on-variant: var(--color-white);
    }

    :host([variant=teal]) {
      --color-variant: var(--color-teal);
      --color-on-variant: var(--color-white);
    }

    :host([variant=yellow]) {
      --color-variant: var(--color-yellow);
      --color-on-variant: var(--color-white);
    }

    /**
     * Core styles
     */

    :host {
      display: flex;
      align-items: stretch;
      padding-top: var(--p-0);
      padding-bottom: var(--p-0);
    }

    ::slotted(a),
    ::slotted(button) {
      display: flex;
      align-items: center;
      color: var(--color-gray-600) !important;
      font-size: var(--text-sm) !important;
      padding: var(--p-4) var(--p-3) !important;
      margin-left: var(--m-1) !important;
      margin-right: var(--m-1) !important;
    }

    ::slotted(button) {
      width: var(--w-full);
    }

    ::slotted(a:hover),
    ::slotted(a:focus),
    ::slotted(a:active),
    ::slotted(button:hover),
    ::slotted(button:focus),
    ::slotted(button:active) {
      color: var(--color-variant) !important;
      outline: none !important;
    }

    ::slotted(a.active),
    ::slotted(button.active) {
      color: var(--color-variant) !important;
    }

    /**
     * Types
     */

    /* Underline type */

    :host([type=underline]) ::slotted(a),
    :host([type=underline]) ::slotted(button) {
      padding: var(--p-4) var(--p-3) var(--p-3) !important;
      border-bottom-width: var(--border-4) !important;
      border-color: var(--color-transparent) !important;
      margin: var(--m-0) var(--m-1) !important;
    }

    :host([type=underline]) ::slotted(a:hover),
    :host([type=underline]) ::slotted(a:focus),
    :host([type=underline]) ::slotted(a:active),
    :host([type=underline]) ::slotted(button:hover),
    :host([type=underline]) ::slotted(button:focus),
    :host([type=underline]) ::slotted(button:active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--color-variant) !important;
    }

    :host([type=underline]) ::slotted(a.active),
    :host([type=underline]) ::slotted(button.active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--color-variant) !important;
    }

    /* Overline type */

    :host([type=overline]) ::slotted(a),
    :host([type=overline]) ::slotted(button) {
      padding: var(--p-3) var(--p-3) var(--p-4) !important;
      border-top-width: var(--border-4) !important;
      border-color: var(--color-transparent) !important;
      margin: var(--m-0) var(--m-1) !important;
    }

    :host([type=overline]) ::slotted(a:hover),
    :host([type=overline]) ::slotted(a:focus),
    :host([type=overline]) ::slotted(a:active),
    :host([type=overline]) ::slotted(button:hover),
    :host([type=overline]) ::slotted(button:focus),
    :host([type=overline]) ::slotted(button:active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--color-variant) !important;
    }

    :host([type=overline]) ::slotted(a.active),
    :host([type=overline]) ::slotted(button.active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--color-variant) !important;
    }

    /* Pill type */

    :host([type=pill]) ::slotted(a),
    :host([type=pill]) ::slotted(button) {
      margin: var(--m-1) var(--m-1) !important;
      padding: var(--p-3) !important;
    }

    :host([type=pill]) ::slotted(a:hover),
    :host([type=pill]) ::slotted(a:focus),
    :host([type=pill]) ::slotted(a:active),
    :host([type=pill]) ::slotted(button:hover),
    :host([type=pill]) ::slotted(button:focus),
    :host([type=pill]) ::slotted(button:active) {
      border-radius: var(--rounded) !important;
      outline: none !important;
      color: var(--color-on-variant) !important;
      background-color: var(--color-variant) !important;
    }

    :host([type=pill]) ::slotted(a.active),
    :host([type=pill]) ::slotted(button.active) {
      border-radius: var(--rounded) !important;
      color: var(--color-on-variant) !important;
      background-color: var(--color-variant) !important;
    }

    /* Block type */

    :host([type=block]) ::slotted(a),
    :host([type=block]) ::slotted(button) {
      margin: var(--m-0) !important;
      padding: var(--p-4) !important;
    }

    :host([type=block]) ::slotted(a:hover),
    :host([type=block]) ::slotted(a:focus),
    :host([type=block]) ::slotted(a:active),
    :host([type=block]) ::slotted(button:hover),
    :host([type=block]) ::slotted(button:focus),
    :host([type=block]) ::slotted(button:active) {
      outline: none !important;
      color: var(--color-on-variant) !important;
      background-color: var(--color-variant) !important;
    }

    :host([type=block]) ::slotted(a.active),
    :host([type=block]) ::slotted(button.active) {
      color: var(--color-on-variant) !important;
      background-color: var(--color-variant) !important;
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
