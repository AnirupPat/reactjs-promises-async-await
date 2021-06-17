const ComplexPromiseAllFetch = () => {
    const names = ['AnirupPat', 'iliakan'];
    let request = names.map(name => fetch(`https://api.github.com/users/${name}`));

    Promise.all(request)
        .then(responses => Promise.all(responses.map(r => r.json())))
        .then(users => users.forEach(user => alert(user.name)))
}

export default ComplexPromiseAllFetch;