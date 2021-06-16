const FinallyPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi There");
        }, 1000);
    });

    promise.then(result => alert(result))
        .finally(alert("finally executed!"))
}

export default FinallyPromise;