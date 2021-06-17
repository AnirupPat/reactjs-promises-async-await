const ErrorHandlePromiseChaining = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    promise.then(
        result => {
            throw new Error('something went wrong');
        }
    ).catch((error) => {
        alert(error.message)
    });
};

export default ErrorHandlePromiseChaining;