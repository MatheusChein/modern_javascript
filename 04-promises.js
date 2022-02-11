const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ res: 'Sucesso', status: 200 })
    // reject('Erro!')
  }, 2000)
});

apiCall
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

// Outra forma de fazer o código acima, de forma mais abreviada
apiCall.then(console.log).catch(console.log)

console.log('Depois da promise .then');

async function run() {
  try {
    const response = await apiCall;
    console.log(response);
    console.log('Depois da promise async await');
  } catch (error) {
    console.log(error);
  }
}

run();

