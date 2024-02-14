class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="login.css">
            <div class="container">
                <h1>Login</h1>
                <form id="loginForm">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
                <p id="error" class="error-message"></p>
            </div>
        `;
        this.loginForm = this.shadowRoot.querySelector('#loginForm');
        this.errorElement = this.shadowRoot.querySelector('#error');
    }

    connectedCallback() {
        this.loginForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const username = this.loginForm.username.value;
        const password = this.loginForm.password.value;

        // Perform login validation here (skipping for simplicity)

        // Redirect to index.html after successful login
        window.location.href = './index.html';
    }
}

customElements.define('login-form', LoginForm);
