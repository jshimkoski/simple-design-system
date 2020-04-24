const template = document.createElement("template");

template.innerHTML = `
  <style>
    :host {
      display: none;
    }
    :host([show]) {
      display: block;
    }
    :host([hidden]) {
      display: none;
    }
    :host article {
      display: flex;
      border-radius: var(--rounded, 4px);
      font-family: var(--font-sans, system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji);
      margin-bottom: var(--m-4, 1rem)
    }
    :host(:not([dismissable])) button {
      display: none;
    }

    /* Primary variant */
    :host([variant=primary]) article {
      background-color: var(--color-blue-200, #BEE3F8);
      border: var(--border, 1px) solid var(--color-blue-600, #3182CE);
      color: var(--color-blue-800, #2C5282);
    }
    :host([variant=primary]) button {
      color: var(--color-blue-800, #2C5282);
    }
    :host([variant=primary]) button:hover {
      color: var(--color-blue-600, #3182CE);
    }

    /* Secondary variant */
    :host([variant=secondary]) article {
      background-color: var(--color-gray-200, #EDF2F7);
      border: var(--border, 1px) solid var(--color-gray-600, #718096);
      color: var(--color-gray-800, #2D3748);
    }
    :host([variant=secondary]) button {
      color: var(--color-gray-800, #2D3748);
    }
    :host([variant=secondary]) button:hover {
      color: var(--color-gray-600, #718096);
    }

    /* Tertiary variant */
    :host([variant=tertiary]) article {
      background-color: var(--color-gray-800, #2D3748);
      border: var(--border, 1px) solid var(--color-gray-400, #CBD5E0);
      color: var(--color-gray-200, #EDF2F7);
    }
    :host([variant=tertiary]) button {
      color: var(--color-gray-200, #EDF2F7);
    }
    :host([variant=tertiary]) button:hover {
      color: var(--color-gray-400, #CBD5E0);
    }

    /* Success variant */
    :host([variant=success]) article {
      background-color: var(--color-green-200, #C6F6D5);
      border: var(--border, 1px) solid var(--color-green-600, #38A169);
      color: var(--color-green-800, #276749);
    }
    :host([variant=success]) button {
      color: var(--color-green-800, #276749);
    }
    :host([variant=success]) button:hover {
      color: var(--color-green-600, #38A169);
    }

    /* Info variant */
    :host([variant=info]) article {
      background-color: var(--color-teal-200, #B2F5EA);
      border: var(--border, 1px) solid var(--color-teal-600, #319795);
      color: var(--color-teal-800, #285E61);
    }
    :host([variant=info]) button {
      color: var(--color-teal-800, #285E61);
    }
    :host([variant=info]) button:hover {
      color: var(--color-teal-600, #319795);
    }

    /* Warning variant */
    :host([variant=warning]) article {
      background-color: var(--color-orange-200, #FEEBC8);
      border: var(--border, 1px) solid var(--color-orange-600, #DD6B20);
      color: var(--color-orange-800, #9C4221);
    }
    :host([variant=warning]) button {
      color: var(--color-orange-800, #9C4221);
    }
    :host([variant=warning]) button:hover {
      color: var(--color-orange-600, #DD6B20);
    }

    /* Danger variant */
    :host([variant=danger]) article {
      background-color: var(--color-red-200, #FED7D7);
      border: var(--border, 1px) solid var(--color-red-600, #E53E3E);
      color: var(--color-red-800, #9B2C2C);
    }
    :host([variant=danger]) button {
      color: var(--color-red-800, #9B2C2C);
    }
    :host([variant=danger]) button:hover {
      color: var(--color-red-600, #E53E3E);
    }

    div {
      flex: 1;
      font-size: var(--text-base, 1rem);
      padding: var(--p-4, 1rem);
    }
    button {
      font-size: var(--text-2xl, 1.5rem);
      padding: 0 var(--p-4, 1rem);
      background: 0;
      border: var(--border-0, 0);
      cursor: pointer;
    }
  </style>
  <article>
    <div>
      <slot></slot>
    </div>
    <button>&times;</button>
  </article>
`;

class Component extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._root.appendChild(template.content.cloneNode(true));
    this.$closeBtn = this._root.querySelector("button");
    this._closeFn = this._close.bind(this);
    this.$closeBtn.addEventListener("click", this._closeFn);
    this.defaultFadeTime = 250;
  }

  disconnectedCallback() {
    this.$closeBtn.removeEventListener("click", this._closeFn);
  }

  /**
   * Custom functions
   */

  _close() {
    this.show = false;
  }

  /**
   * Attribute/property reflection getters/setters
   */

  // fade

  set fade(val) {
    if (val) {
      this.setAttribute("fade", "");
    } else {
      this.removeAttribute("fade");
    }
  }

  get fade() {
    return this.hasAttribute("fade");
  }

  // fadeTime

  set fadeTime(val) {
    if (val) {
      this.setAttribute("fade-time", val);
    } else {
      this.removeAttribute("fade-time");
    }
  }

  get fadeTime() {
    const val = this.getAttribute("fade-time");
    const tmpFadeTime = parseInt(val, 10);
    const fadeTime = Number.isFinite(tmpFadeTime)
      ? tmpFadeTime
      : this.defaultFadeTime;
    return fadeTime;
  }

  // dismissable

  set dismissable(val) {
    if (val) {
      this.setAttribute("dismissable", "");
    } else {
      this.removeAttribute("dismissable");
    }
  }

  get dismissable() {
    return this.hasAttribute("dismissable");
  }

  // show
  // TODO: FIGURE OUT THE DAMN FADE ANIMATION

  static get observedAttributes() {
    return ["show"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "show" && this.fade) {
      if (newVal !== null) {
        setTimeout(() => {
          this.style.opacity = "0";
          this.style.transition = `opacity ${this.fadeTime}ms linear`;
          this.style.opacity = "1";
        }, 0);
      } else {
        setTimeout(() => {
          this.style.opacity = "1";
          this.style.transition = `opacity ${this.fadeTime}ms linear`;
          this.style.opacity = "0";
        }, 0);
      }
    }
  }

  set show(val) {
    if (val) {
      this.setAttribute("show", "");
    } else {
      this.removeAttribute("show");
    }
  }

  get show() {
    return this.hasAttribute("show");
  }
}

customElements.define("sds-alert", Component);
