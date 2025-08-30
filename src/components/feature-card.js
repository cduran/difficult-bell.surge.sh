import { LitElement, html, css } from 'lit';

export class FeatureCard extends LitElement {
  static properties = {
    icon: { type: String },
    title: { type: String },
    description: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
      text-align: center;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .icon {
      width: 4rem;
      height: 4rem;
      margin: 0 auto 1.5rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      background: var(--gradient-primary);
      color: white;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .description {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="icon">${this.icon}</div>
        <h3 class="title">${this.title}</h3>
        <p class="description">${this.description}</p>
      </div>
    `;
  }
}

customElements.define('feature-card', FeatureCard);
