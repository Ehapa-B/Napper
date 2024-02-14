class SignupFormController {
    constructor() {
        this.signupForm = document.querySelector('signup-form');
        this.signupForm.addEventListener('signup-success', this.handleSignupSuccess.bind(this));
    }

    handleSignupSuccess() {
        // Simulating sign up without backend API
        alert('Sign up successful! You can now login.');
        window.location.href = 'login.html'; // Redirect to login page
    }
}

new SignupFormController();
