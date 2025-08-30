import { LitElement, html, css } from 'lit';

export class ContactSection extends LitElement {
  static properties = {
    formData: { state: true },
    isSubmitting: { state: true },
    submitStatus: { state: true }
  };

  constructor() {
    super();
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.isSubmitting = false;
    this.submitStatus = '';
  }

  static styles = css`
    :host {
      display: block;
      padding: 6rem 0;
      background: white;
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

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      padding: 2rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: var(--background-secondary);
      border-radius: 12px;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease;
    }

    .info-item:hover {
      transform: translateX(5px);
      box-shadow: var(--shadow-sm);
    }

    .info-icon {
      width: 3rem;
      height: 3rem;
      background: var(--gradient-primary);
      color: white;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .info-content h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }

    .info-content p {
      color: var(--text-secondary);
      margin: 0;
    }

    .contact-form {
      background: var(--background-secondary);
      padding: 2rem;
      border-radius: 16px;
      border: 1px solid var(--border-color);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .form-input,
    .form-textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .form-textarea {
      min-height: 120px;
      resize: vertical;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem 2rem;
      background: var(--gradient-primary);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .status-message {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 8px;
      text-align: center;
      font-weight: 500;
    }

    .status-success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }

    .status-error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #fca5a5;
    }

    @media (max-width: 768px) {
      :host {
        padding: 4rem 0;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .contact-form,
      .contact-info {
        padding: 1.5rem;
      }
    }
  `;

  handleInputChange(e) {
    const { name, value } = e.target;
    this.formData = { ...this.formData, [name]: value };
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitStatus = 'error';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = '';

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.submitStatus = 'success';
      this.formData = { name: '', email: '', message: '' };
    } catch (error) {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }

  render() {
    return html`
      <section class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">
            Ready to start your next project? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h3>Email</h3>
                <p>hello@difficult-bell.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">💬</div>
              <div class="info-content">
                <h3>Live Chat</h3>
                <p>Available Mon-Fri, 9AM-6PM</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">🌐</div>
              <div class="info-content">
                <h3>Website</h3>
                <p>difficult-bell.surge.sh</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">⚡</div>
              <div class="info-content">
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>

          <form class="contact-form" @submit=${this.handleSubmit}>
            <div class="form-group">
              <label class="form-label" for="name">Name</label>
              <input
                class="form-input"
                type="text"
                id="name"
                name="name"
                .value=${this.formData.name}
                @input=${this.handleInputChange}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="email">Email</label>
              <input
                class="form-input"
                type="email"
                id="email"
                name="email"
                .value=${this.formData.email}
                @input=${this.handleInputChange}
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Message</label>
              <textarea
                class="form-textarea"
                id="message"
                name="message"
                .value=${this.formData.message}
                @input=${this.handleInputChange}
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button
              class="submit-btn"
              type="submit"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting ? html`
                <span>⏳</span>
                Sending...
              ` : html`
                <span>🚀</span>
                Send Message
              `}
            </button>

            ${this.submitStatus === 'success' ? html`
              <div class="status-message status-success">
                ✅ Message sent successfully! We'll get back to you soon.
              </div>
            ` : ''}

            ${this.submitStatus === 'error' ? html`
              <div class="status-message status-error">
                ❌ Please fill in all fields correctly.
              </div>
            ` : ''}
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-section', ContactSection);
