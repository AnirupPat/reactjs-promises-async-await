const ThenAfterCatchPromiseCall = () => {
    const promise = new Promise((resolve, reject) => {
        throw new Error('Something went wrong');
    });
    promise.then(
        result => {
            alert("First then block executed")
        }
    )
    .catch((error) => {
        alert(error.message)
    }).then(
        () => alert("Second then block executed")
    )
}

export default ThenAfterCatchPromiseCall;