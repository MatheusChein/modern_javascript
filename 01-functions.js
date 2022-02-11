function myFunction() {
  this.name = 'Matheus';

  const myArrowFunction = () => {
    this.lastName = "Chein"
  }

  myArrowFunction();
}

console.log(new myFunction());
console.log(this);