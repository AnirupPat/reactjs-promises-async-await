const PromiseAllRejection = () => {
    Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject("Something went wrong"), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    ]).catch(alert)
}

export default PromiseAllRejection;