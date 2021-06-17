const BasicPromiseAll = () => {
    const promise = Promise.all([
        new Promise(resolve => setTimeout(() => resolve(1), 3000)),
        new Promise(resolve => setTimeout(() => resolve(2), 2000)),
        new Promise(resolve => setTimeout(() => resolve(3), 1000))
    ]);
    promise.then(alert); // 1,2,3 after 3 seconds..
}

export default BasicPromiseAll;