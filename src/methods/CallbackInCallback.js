const CallbackInCallback = () => {
    const mainCall = (greetMsg, callback) => {
        alert(greetMsg);
        setTimeout(() => {
            callback()
        }, 1000);
    };

    mainCall('Hi, There', () => {
        alert('Hope you r doing well !');
        mainCall('Chalo Byee', () => {
            alert('See you soon!');
        })
    });
}

export default CallbackInCallback;