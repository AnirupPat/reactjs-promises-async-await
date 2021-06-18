const BasicAsync = () => {
    const call = async() => {
        return 1;
    }
    call().then(alert);
}

export default BasicAsync;