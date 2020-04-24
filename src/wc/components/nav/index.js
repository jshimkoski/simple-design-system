const template = document.createElement("template");

template.innerHTML = `
  <style>
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

    ::slotted(a:hover),
    ::slotted(a:focus),
    ::slotted(a:active),
    ::slotted(button:hover),
    ::slotted(button:focus),
    ::slotted(button:active) {
      color: var(--color-fgcolor) !important;
      outline: none !important;
    }

    ::slotted(a.active),
    ::slotted(button.active) {
      color: var(--color-fgcolor) !important;
    }

    /**
     * Color variants
     */

     :host {
      --color-nav-hover: var(--color-bgcolor);
      --color-nav-active: var(--color-fgcolor);
      --bg-nav-hover: var(--color-gray-500);
      --bg-nav-active: var(--color-gray-500);
    }

    :host([variant=blue]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-blue);
      --bg-nav-active: var(--color-blue);
    }

    :host([variant=green]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-green);
      --bg-nav-active: var(--color-green);
    }

    :host([variant=indigo]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-indigo);
      --bg-nav-active: var(--color-indigo);
    }

    :host([variant=orange]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-orange);
      --bg-nav-active: var(--color-orange);
    }

    :host([variant=pink]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-pink);
      --bg-nav-active: var(--color-pink);
    }

    :host([variant=purple]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-purple);
      --bg-nav-active: var(--color-purple);
    }

    :host([variant=red]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-red);
      --bg-nav-active: var(--color-red);
    }

    :host([variant=teal]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-teal);
      --bg-nav-active: var(--color-teal);
    }

    :host([variant=yellow]) {
      --color-nav-hover: var(--color-white);
      --color-nav-active: var(--color-white);
      --bg-nav-hover: var(--color-yellow);
      --bg-nav-active: var(--color-yellow);
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
      border-color: var(--bg-nav-hover) !important;
    }

    :host([type=underline]) ::slotted(a.active),
    :host([type=underline]) ::slotted(button.active) {
      outline: none !important;
      color: var(--color-fgcolor) !important;
      border-color: var(--bg-nav-active) !important;
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
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-hover) !important;
    }

    :host([type=pill]) ::slotted(a.active),
    :host([type=pill]) ::slotted(button.active) {
      border-radius: var(--rounded) !important;
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-active) !important;
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
      color: var(--color-nav-hover) !important;
      background-color: var(--bg-nav-hover) !important;
    }

    :host([type=block]) ::slotted(a.active),
    :host([type=block]) ::slotted(button.active) {
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
