const PromiseAnyAggregateError = () => {
    Promise.any([
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 1')), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 2')), 2000))
    ]).catch(error => {
        alert(error.constructor.name); // AggregateError
        alert(error.errors[0]); // Error: Ouch!
        alert(error.errors[1]); // Error: Error
    })
}

export default PromiseAnyAggregateError;