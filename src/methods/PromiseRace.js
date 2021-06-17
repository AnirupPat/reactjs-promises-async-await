const PromiseRace = () => {
  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => {reject(new Error('something went wrong'))}, 1000)),
    new Promise((resolve, reject) => setTimeout(() => {resolve(1)}, 2000)),
    new Promise((resolve, reject) => setTimeout(() => {resolve(1)}, 3000)),
  ]).then(alert)
  .catch(alert);
};

export default PromiseRace;
