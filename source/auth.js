//this js file kicks out user if they are not authenticated.

class Auth {
    constructor() {
        const auth = localstroage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if (auth != 1) {
            window.location.replace("/");
        }

        else {

        }
    }

    logOut() {
        localStorage.removeItem("auth");
        window.location.replace("/");
    }
}