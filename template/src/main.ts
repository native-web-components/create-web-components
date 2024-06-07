class WebComponent extends HTMLElement {
  static get observedAttributes() {
    return [];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // const div = document.createElement("div");
    // div.innerHTML = "Hello World";
    // this.shadowRoot!.appendChild(div);
  }

  connectedCallback() {
    // console.log("connectedCallback when Custom element added to page.");
    this.render();
  }

  // disconnectedCallback() {
  //   console.log("disconnectedCallback when Custom element removed from page.");
  // }

  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  //   console.log(
  //     `attributeChangedCallback when Attribute: ${name} changed from ${oldValue} to ${newValue}`
  //   );
  // }

  // adoptedCallback() {
  //   console.log(
  //     "adoptedCallback when Custom element adopted into new document."
  //   );
  // }

  render() {
    this.shadowRoot!.innerHTML = `<div>Your Web Component is {{projectName}}</div>`;
  }
}

customElements.define("{{projectName}}", WebComponent);