import GrainLitElement, { html } from './node_modules/grain-lit-element/GrainLitElement.js';

const targetSize = 25;

export default class FiberTriangle extends GrainLitElement(HTMLElement) {
  static get properties() {
    return {
      s: {
        type: Number,
      },
      x: {
        type: Number,
      },
      y: {
        type: Number,
      },
      seconds: {
        type: Number,
      },
    };
  }

  render() {
    let { s } = this;
    if (s <= targetSize) {
      return html`
        <fiber-dot
            x="${this.x - (targetSize / 2)}"
            y="${this.y - (targetSize / 2)}"
            size="${targetSize}"
            text="${this.seconds}"
        ></fiber-dot>
      `;
    }
    s /= 2;

    const slowDown = true;
    if (slowDown) {
      const e = performance.now() + 0.8;
      while (performance.now() < e) {
        // Artificially long execution time.
      }
    }

    let a = new FiberTriangle();
    a.x = this.x;
    a.y = this.y - (s / 2);
    a.s = s;
    a.seconds = this.seconds;

    let b = new FiberTriangle();
    b.x = this.x -s;
    b.y = this.y + (s / 2);
    b.s = s;
    b.seconds = this.seconds;

    let c = new FiberTriangle();
    c.x = this.x + s;
    c.y = this.y + (s / 2);
    c.s = s;
    c.seconds = this.seconds;

    return html`
      ${a.render()}
      ${b.render()}
      ${c.render()}
    `;
  }
}

customElements.define('fiber-triangle', FiberTriangle);
