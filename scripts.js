class DashboardMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="styles.css">
            <div class="main-content">
                <div class="left-content">
                    <img src="./images/man.PNG" alt="Image" />
                </div>
                <div class="right-content">
                    <h1>Track your <br> productivity <br>
                    <img class="capsule" src="./images/capsule.png" />
                    <span class="on">online</span> </h1>
                    <div class="right-image">
                        <p>Solving problems with drowsiness, <br>
                        apathy, lack of motivation and other <br>
                        factors that do not allow you grow   </p>
                        <div class="right-arrow">
                            <img class="arrow-icon" src="./images/arrow.png" alt="Image"  />
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Add functionality here
        const arrowIcon = this.shadowRoot.querySelector('.arrow-icon');
        arrowIcon.addEventListener('click', () => {
            // Example functionality: Navigate to next page
            console.log('Navigating to next page...');
        });
    }
}

customElements.define('dashboard-main', DashboardMain);
