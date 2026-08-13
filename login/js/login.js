if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (user) {
            window.location.href = "/secure/";
        }
    });

    window.netlifyIdentity.on("login", () => {
        window.location.href = "/secure/";
    });
}