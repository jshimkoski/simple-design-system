import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));
  }

  disconnectedCallback() {}
}

customElements.define("sds-container", Component);
