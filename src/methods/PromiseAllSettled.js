const PromiseAllSettled = () => {
  const urls = [
    "https://api.github.com/users/iliakan",
    "https://api.github.com/users/remy",
    "https://no-such-url",
  ];

  const requests = urls.map(url => fetch(url));
  Promise.allSettled(requests)
  .then(responses => {
    // below is the response...  
    // [
    //     {status: 'fulfilled', value: ...response...},
    //     {status: 'fulfilled', value: ...response...},
    //     {status: 'rejected', reason: ...error object...}
    //   ]
      responses.forEach(response => {
          alert(response.status);
      })
  })
};

export default PromiseAllSettled;
