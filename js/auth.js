document.addEventListener("DOMContentLoaded", function () {

    // Check Netlify Identity
    if (!window.netlifyIdentity) {
        console.error("Netlify Identity is not loaded.");
        return;
    }

    // Initialize user session
    window.netlifyIdentity.on("init", function (user) {

        // User is not logged in
        if (!user) {
            window.location.href = "/login/";
            return;
        }

        // Display logged-in user's email
        const emailElement = document.getElementById("user-email");

        if (emailElement) {
            emailElement.textContent = "Logged in as: " + user.email;
        }

    });

    // Logout button
    const logoutButton = document.getElementById("logout");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            window.netlifyIdentity.logout();

        });

    }

    // After logout
    window.netlifyIdentity.on("logout", function () {

        window.location.href = "/login/";

    });

});