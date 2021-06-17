const PromiseAllFetch = () => {
  let urls = [
    "https://api.github.com/users/AnirupPat",
    "https://api.github.com/users/remy",
    "https://api.github.com/users/jeresig",
  ];
  let requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => responses.forEach(response => alert(response.url)))
};

export default PromiseAllFetch;
