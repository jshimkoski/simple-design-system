import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(templateEl.content.cloneNode(true));
  }

  disconnectedCallback() {}
}

customElements.define("sds-card", Component);
