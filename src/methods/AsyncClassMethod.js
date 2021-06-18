const AsyncClassMethod = () => {
    class Waiter {
        async wait() {
            const req = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("done it");
                }, 1000);
            })
            return await req;
        }
    }

    new Waiter().wait().then(alert);
}

export default AsyncClassMethod;