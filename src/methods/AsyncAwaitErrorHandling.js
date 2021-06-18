const AsyncAwaitErrorHandling = () => {
    const call = async() => {
        try {
            let req = new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error('something went wrong')), 1000);
            })
            return await req;
        } catch(error) {
            alert(error);
        }
    }
    call();
}

export default AsyncAwaitErrorHandling;