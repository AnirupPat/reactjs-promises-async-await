const UnhandledRejections = () => {
    const promise = new Promise((resolve, reject) => {
        throw new Error('Something went wrong !')
    });

    promise.then(result => alert(result));

    window.addEventListener('unhandledrejection', (event) => {
        alert(event.promise);
        alert(event.reason);
    })
}

export default UnhandledRejections;