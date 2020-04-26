const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: grid;

      grid-template-areas:
        "sidebar content sidebar-right";

      grid-template-columns: auto 1fr auto;
      grid-template-rows: 1fr;

      height: 100%;
      width: 100%;
    }

    ::slotted([slot=sidebar]) {
      grid-area: sidebar;
    }

    ::slotted([slot=content]) {
      grid-area: content;
    }

    ::slotted([slot=sidebar-right]) {
      grid-area: sidebar-right;
    }
  </style>
  <slot name="sidebar"></slot>
  <slot name="content"></slot>
  <slot name="sidebar-right"></slot>
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

customElements.define("sds-layout-sidebar", Component);
