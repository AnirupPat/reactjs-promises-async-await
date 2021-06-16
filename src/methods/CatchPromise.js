const CatchPromise = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Lets Catch it!'))
        }, 1000);
    });

    promise.catch(error => alert(error.message));
}

export default CatchPromise;