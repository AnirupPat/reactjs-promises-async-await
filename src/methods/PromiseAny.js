const PromiseAny = () => {
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Something went wrong')), 1000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(2), 3000))
    ]).then(alert)
}

export default PromiseAny;