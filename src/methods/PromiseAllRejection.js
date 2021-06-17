const PromiseAllRejection = () => {
    Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    ]).catch(alert)
}
// Here the second promise rejects in two seconds. 
// That leads to an immediate rejection of Promise.all, 
// so .catch executes: the rejection error becomes the outcome of the entire Promise.all.

export default PromiseAllRejection;