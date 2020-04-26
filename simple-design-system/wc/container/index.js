const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: var(--p-8) var(--p-4);
    }

    @media screen and (min-width: 768px) {
      :host {
        padding: var(--p-8);
      }
    }
  </style>
  <slot></slot>
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

customElements.define("sds-container", Component);
