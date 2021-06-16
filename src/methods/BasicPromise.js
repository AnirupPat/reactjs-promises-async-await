const BasicPromise = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done")
        }, 1000);
    });

    promise.then(
        result => alert(result)
    );
}

export default BasicPromise;