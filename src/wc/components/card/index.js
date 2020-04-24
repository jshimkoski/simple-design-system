const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: block;
      background-color: var(--color-bgcolor);
    }

    ::slotted([slot=subtitle]) {
      font-size: var(--text-sm);
      color: var(--color-gray-500);
    }

    ::slotted([slot=content]) {
      padding: var(--p-4);
    }

    ::slotted([slot=nav]) {
      margin-left: var(--m-auto);
      display: flex;
      justify-content: center;
      align-items: stretch;
    }

    header {
      display: flex;
      padding: var(--p-3) var(--p-4);
    }

    :host([type=simple]),
    :host([type=raised]) {
      border: var(--border) solid var(--color-gray-300) !important;
    }

    :host([type=simple]) header,
    :host([type=raised]) header,
    :host([type=accented]) header {
      border-bottom: var(--border) solid var(--color-gray-300);
    }

    :host([type=raised]) {
      box-shadow: var(--shadows);
      border-width: var(--border);
      border-radius: var(--rounded);
    }

    @media screen and (min-width: 640px) {
      :host([type=raised]) {
        border-radius: var(--rounded-lg);
      }
    }

    :host([type=accented]) header {
      border-top: var(--border-2) solid var(--color-fgcolor);
    }
  </style>
  <header part="header">
    <div>
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
    </div>
    <slot name="nav"></slot>
  </header>
  <slot name="content"></slot>
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

customElements.define("sds-card", Component);
