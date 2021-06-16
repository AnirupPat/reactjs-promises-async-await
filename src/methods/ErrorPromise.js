const ErrorPromise = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error received !!"));
    }, 1000);
  });

  promise.then(
    (result) => alert(result),
    (error) => alert(error.message)
  );
};

export default ErrorPromise;
