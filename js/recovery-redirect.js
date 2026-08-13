(function () {
    const hash = window.location.hash;

    if (!hash) {
        return;
    }

    const supportedTokens = [
        "#recovery_token=",
        "#invite_token=",
        "#confirmation_token=",
        "#email_change_token="
    ];

    const isAuthToken = supportedTokens.some(function (token) {
        return hash.startsWith(token);
    });

    if (isAuthToken) {
        window.location.replace("/login/" + hash);
    }
})();