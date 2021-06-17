const PromiseChaining = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    promise.then(
        result => {
            alert(result);
            return result * 2;
        }
    ).then(
        result => {
            alert(result);
            return result * 2;
        }
    ).then(
        result => {
            alert(result);
        }
    )
}

export default PromiseChaining;