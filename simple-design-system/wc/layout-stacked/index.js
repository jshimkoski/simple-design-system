const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: grid;

      grid-template-areas:
        "header"
        "content"
        "footer";

      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;

      min-height: var(--min-h-screen);
      width: var(--w-full);
    }

    ::slotted([slot=header]) {
      grid-area: header;
    }

    ::slotted([slot=content]) {
      grid-area: content;
    }

    ::slotted([slot=footer]) {
      grid-area: footer;
    }
  </style>
  <slot name="header"></slot>
  <slot name="content"></slot>
  <slot name="footer"></slot>
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

customElements.define("sds-layout-stacked", Component);
