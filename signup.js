class SignupForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="signup.css">
            <div class="container">
                <h1>Sign Up</h1>
                <form id="signupForm">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="login.html">Login</a></p>
                <p id="error" class="error-message"></p>
            </div>
        `;
        this.signupForm = this.shadowRoot.querySelector('#signupForm');
        this.errorElement = this.shadowRoot.querySelector('#error');
    }

    connectedCallback() {
        this.signupForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const username = this.signupForm.username.value;
        const password = this.signupForm.password.value;
        const confirmPassword = this.signupForm.confirmPassword.value;

        // Simple password confirmation
        if (password !== confirmPassword) {
            this.errorElement.textContent = 'Passwords do not match.';
            return;
        }

        // Dispatch custom event for successful signup
        this.dispatchEvent(new CustomEvent('signup-success', { bubbles: true, composed: true }));
    }
}

customElements.define('signup-form', SignupForm);
