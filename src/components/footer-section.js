import { LitElement, html, css } from 'lit';

export class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--text-primary);
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 1rem 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      text-decoration: none;
      margin-bottom: 1rem;
    }

    .logo-icon {
      font-size: 2rem;
    }

    .brand-description {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 2.5rem;
      height: 2.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--primary-color);
      transform: translateY(-2px);
    }

    .footer-section h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: white;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .tech-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .tech-badge span {
      color: var(--secondary-color);
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom {
        flex-direction: column;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `;

  render() {
    return html`
      <footer class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <a href="#" class="brand-logo">
              <span class="logo-icon">🔔</span>
              Difficult Bell
            </a>
            <p class="brand-description">
              Creating modern web experiences with cutting-edge technology. 
              We build fast, beautiful, and scalable web applications.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="GitHub">💻</a>
              <a href="#" class="social-link" aria-label="Twitter">🐦</a>
              <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" class="social-link" aria-label="Email">📧</a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Services</h3>
            <ul class="footer-links">
              <li><a href="#">Web Development</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Performance Optimization</a></li>
              <li><a href="#">Mobile Development</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Technologies</h3>
            <ul class="footer-links">
              <li><a href="#">Lit Framework</a></li>
              <li><a href="#">Web Components</a></li>
              <li><a href="#">Vite</a></li>
              <li><a href="#">Modern CSS</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            © ${new Date().getFullYear()} Difficult Bell. All rights reserved.
          </div>
          <div class="tech-badge">
            Built with <span>⚡</span> Lit Framework & deployed on <span>🚀</span> Surge.sh
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-section', FooterSection);
