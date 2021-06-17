const ReturningPromises = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    promise.then(
        result => {
            alert(result);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(result * 2);
                }, 1000);
            })
        }
    ).then(
        result => {
            alert(result);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(result * 2);
                }, 1000);
            })
        }
    );
}

export default ReturningPromises;