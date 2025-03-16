if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then((registration) => {
                console.log('Service worker registered.', registration);
            });
    });
}