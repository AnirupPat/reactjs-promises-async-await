const BasicAsyncAwait = () => {
    const call = async() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        });
        let result = await promise;
        alert(result);
    }

    call();
}

export default BasicAsyncAwait;