function soma() {
  console.log(arguments);
  console.log(Object.values(arguments));
}

soma(1, 2, 3, 4, 5, 'Matheus');

function soma2(firstArg, ...args) {
  console.log(firstArg);
  console.log(args);
}

soma2(1, 2, 3, 4, 5, 'Matheus');
