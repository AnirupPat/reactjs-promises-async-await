const BasicCallback = () => {
    const callMain = (greetMsg, callback) => {
        alert(greetMsg);
        setTimeout(() => {
            callback('Bye.. see you!');
        }, 1000);
    }

    callMain('Hi, There', (msg) => {
        alert(msg);
    });
}

export default BasicCallback;