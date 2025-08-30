import { LitElement, html, css } from 'lit';

export class TechStack extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 6rem 0;
      background: var(--background-secondary);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .tech-category {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .tech-category:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .category-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .category-icon {
      font-size: 2rem;
    }

    .tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-item {
      background: var(--background-secondary);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .tech-item:hover {
      background: var(--primary-color);
      color: white;
      transform: scale(1.05);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: 16px;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .feature-icon {
      width: 4rem;
      height: 4rem;
      margin: 0 auto 1rem;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      background: var(--gradient-primary);
      color: white;
    }

    .feature-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.5rem;
    }

    .feature-description {
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 0;
      }

      .tech-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .tech-category, .feature-card {
        padding: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <section class="container">
        <div class="section-header">
          <h2 class="section-title">Modern Technology Stack</h2>
          <p class="section-subtitle">
            Built with cutting-edge tools and frameworks for optimal performance and developer experience
          </p>
        </div>

        <div class="tech-grid">
          <div class="tech-category">
            <h3 class="category-title">
              <span class="category-icon">⚡</span>
              Frontend
            </h3>
            <div class="tech-list">
              <span class="tech-item">Lit Framework</span>
              <span class="tech-item">Web Components</span>
              <span class="tech-item">ES6+ Modules</span>
              <span class="tech-item">CSS Grid</span>
              <span class="tech-item">CSS Custom Properties</span>
              <span class="tech-item">Responsive Design</span>
            </div>
          </div>

          <div class="tech-category">
            <h3 class="category-title">
              <span class="category-icon">🛠️</span>
              Build Tools
            </h3>
            <div class="tech-list">
              <span class="tech-item">Vite</span>
              <span class="tech-item">ESBuild</span>
              <span class="tech-item">Hot Module Replacement</span>
              <span class="tech-item">Tree Shaking</span>
              <span class="tech-item">Code Splitting</span>
              <span class="tech-item">Minification</span>
            </div>
          </div>

          <div class="tech-category">
            <h3 class="category-title">
              <span class="category-icon">🚀</span>
              Deployment
            </h3>
            <div class="tech-list">
              <span class="tech-item">Surge.sh</span>
              <span class="tech-item">CDN Distribution</span>
              <span class="tech-item">HTTPS Enabled</span>
              <span class="tech-item">Custom Domains</span>
              <span class="tech-item">Continuous Deployment</span>
              <span class="tech-item">Static Hosting</span>
            </div>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">Modern Design</h3>
            <p class="feature-description">
              Clean, professional design with smooth animations and responsive layouts that look great on all devices.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Lightning Fast</h3>
            <p class="feature-description">
              Optimized performance with minimal bundle size, efficient rendering, and instant page loads.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3 class="feature-title">Developer Experience</h3>
            <p class="feature-description">
              Modern development workflow with hot reloading, TypeScript support, and excellent debugging tools.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Mobile First</h3>
            <p class="feature-description">
              Responsive design that works perfectly on mobile devices with touch-friendly interactions.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('tech-stack', TechStack);
