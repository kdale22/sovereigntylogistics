document.addEventListener("DOMContentLoaded", function () {

    if (!window.netlifyIdentity) {
        console.error("Netlify Identity is not loaded.");
        return;
    }

    window.netlifyIdentity.on("init", function (user) {

        if (user) {
            window.location.href = "/secure/";
        }

    });

    window.netlifyIdentity.on("login", function () {

        window.location.href = "/secure/";

    });

});