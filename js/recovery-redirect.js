(function () {
    const hash = window.location.hash;

    if (hash && hash.indexOf("#recovery_token=") === 0) {
        window.location.replace("/login/" + hash);
    }
})();