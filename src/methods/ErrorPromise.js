const ErrorPromise = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error received !!");
    }, 1000);
  });

  promise.then(
    (result) => alert(result),
    (error) => alert(error)
  );
};

export default ErrorPromise;
