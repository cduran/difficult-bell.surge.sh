import { LitElement, html, css } from 'lit';

export class MainApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--background);
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
      padding: 0 1rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      text-decoration: none;
    }

    .logo-icon {
      font-size: 2rem;
      animation: gentle-bell 3s ease-in-out infinite;
    }

    @keyframes gentle-bell {
      0%, 90%, 100% { transform: rotate(0deg); }
      10%, 30% { transform: rotate(15deg); }
      20%, 40% { transform: rotate(-15deg); }
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--text-secondary);
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-links a:hover {
      color: var(--primary-color);
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .main-content {
      margin-top: 4rem;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .container {
        padding: 0 0.5rem;
      }
    }
  `;

  render() {
    return html`
      <header>
        <nav class="container">
          <a href="#" class="logo">
            <span class="logo-icon">🔔</span>
            Difficult Bell
          </a>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#tech">Technology</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main class="main-content">
        <hero-section id="home"></hero-section>
        <tech-stack id="tech"></tech-stack>
        <contact-section id="contact"></contact-section>
        <footer-section></footer-section>
      </main>
    `;
  }
}

customElements.define('main-app', MainApp);
