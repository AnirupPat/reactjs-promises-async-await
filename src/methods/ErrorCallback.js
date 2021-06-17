const ErrorCallback = () => {
    const mainCall = (message, callback) => {
        alert(message);
        setTimeout(() => {
            // callback(null, 'Bye');
            callback(new Error('something went wrong.', null));
        }, 1000);
    }
    mainCall('Hello There !', (error, result) => {
        if(error) {
            alert(error.message);            
        } else {
            alert(result);
        }
    });
}

export default ErrorCallback;