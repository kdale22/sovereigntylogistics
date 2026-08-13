document.addEventListener("DOMContentLoaded", function () {

    if (!window.netlifyIdentity) {
        console.error("Netlify Identity is not loaded.");
        return;
    }

    window.netlifyIdentity.on("init", function (user) {

        // User is not logged in
        if (!user) {
            window.location.href = "/login/";
            return;
        }

        // Display logged-in email
        const emailElement = document.getElementById("user-email");

        if (emailElement) {
            emailElement.textContent = "Logged in as: " + user.email;
        }

    });

    // Logout
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

     if (!window.netlifyIdentity) {
        console.error("Netlify Identity is not loaded.");
        return;
    }

    window.netlifyIdentity.on("init", function (user) {

        if (!user) {
            window.location.href = "/login/";
            return;
        }

        const emailElement = document.getElementById("user-email");

        if (emailElement) {
            emailElement.textContent = user.email;
        }

    });

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.netlifyIdentity.logout();
        });
    }

    window.netlifyIdentity.on("logout", function () {
        window.location.href = "/login/";
    });

});

document.addEventListener("DOMContentLoaded", function () {

    if (!window.netlifyIdentity) {
        console.error("Netlify Identity is not loaded.");
        return;
    }

    window.netlifyIdentity.on("init", function (user) {

        if (!user) {
            window.location.href = "/login/";
            return;
        }

        const emailElement = document.getElementById("user-email");

        if (emailElement) {
            emailElement.textContent = user.email;
        }

    });

    const logoutButton = document.getElementById("logout");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.netlifyIdentity.logout();
        });
    }

    window.netlifyIdentity.on("logout", function () {
        window.location.href = "/login/";
    });

});