import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
  static properties = {
    currentFeature: { state: true },
    features: { state: true }
  };

  constructor() {
    super();
    this.currentFeature = 0;
    this.features = [
      { icon: '⚡', text: 'Lightning Fast' },
      { icon: '🚀', text: 'Modern Stack' },
      { icon: '🎨', text: 'Beautiful Design' },
      { icon: '📱', text: 'Mobile First' }
    ];
  }

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--gradient-primary);
      position: relative;
      overflow: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 6rem 1rem 4rem;
      position: relative;
      z-index: 2;
    }

    .hero-content {
      text-align: center;
      color: white;
    }

    .hero-title {
      font-size: clamp(2.5rem, 8vw, 4rem);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: clamp(1.1rem, 3vw, 1.5rem);
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 3rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 4rem;
    }

    .btn {
      padding: 1rem 2rem;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-primary {
      background: white;
      color: var(--primary-color);
      box-shadow: var(--shadow-lg);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .features-showcase {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
    }

    .feature-item {
      text-align: center;
      padding: 2rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .feature-item:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.15);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
    }

    .feature-text {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .background-shapes {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 1;
    }

    .shape {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .shape:nth-child(1) {
      width: 200px;
      height: 200px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    .shape:nth-child(2) {
      width: 150px;
      height: 150px;
      top: 20%;
      right: 15%;
      animation-delay: 2s;
    }

    .shape:nth-child(3) {
      width: 100px;
      height: 100px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    @media (max-width: 768px) {
      .container {
        padding: 4rem 1rem 2rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 300px;
      }

      .features-showcase {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .feature-item {
        padding: 1.5rem 1rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.startFeatureRotation();
  }

  startFeatureRotation() {
    setInterval(() => {
      this.currentFeature = (this.currentFeature + 1) % this.features.length;
    }, 3000);
  }

  render() {
    return html`
      <div class="background-shapes">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Modern Web Solutions<br>
            That Ring True
          </h1>
          <p class="hero-subtitle">
            Cutting-edge web applications built with the latest technologies. 
            Fast, beautiful, and designed for the future.
          </p>
          
          <div class="cta-buttons">
            <a href="#tech" class="btn btn-primary">
              <span>🚀</span>
              Explore Technology
            </a>
            <a href="#contact" class="btn btn-secondary">
              <span>💬</span>
              Get In Touch
            </a>
          </div>

          <div class="features-showcase">
            ${this.features.map((feature, index) => html`
              <div class="feature-item" style="opacity: ${index === this.currentFeature ? '1' : '0.7'}">
                <span class="feature-icon">${feature.icon}</span>
                <div class="feature-text">${feature.text}</div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-section', HeroSection);
