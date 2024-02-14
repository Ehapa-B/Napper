class DashboardHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <div class="header">
                <div class="logo">
                <a href="./index.html"><img src="./images/logos.png" alt="Logo"></a>
                </div>
                <ul class="nav-list">
                    <li id="Link">About</li>
                    <li id="Link">How it works</li>
                    <li><a href="./login.html" id="loginLink">Login</a></li>
                    <li> <a href="./signup.html" id="signLink">Registration</a></li>
                </ul>
                <button class="button">Open Dashboard</button>
            </div>
        `;

        // Add event listener for login link
        this.shadowRoot.querySelector('./login.html').addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            this.showLoginForm();
        });

        // Add functionality to the button
        this.shadowRoot.querySelector('.button').addEventListener('click', () => {
            // Example functionality: Open the dashboard
            console.log('Opening Dashboard...');
        });
    } 
}

customElements.define('dashboard-header', DashboardHeader);
