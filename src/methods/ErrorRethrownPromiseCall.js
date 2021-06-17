const ErrorRethrownPromiseCall = () => {
    const promise = new Promise((resolve, reject) => {
        throw new Error('something went worng')
    });
    promise.catch(error => {
        throw error;
    }).then(
        // this block is not executed anytime...
        error => alert("Next then block executed")
    ).catch(error => alert("Next catch block executed"))
}

export default ErrorRethrownPromiseCall;