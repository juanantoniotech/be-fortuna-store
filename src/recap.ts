const myName = 'Juan';
const myAge = 35;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 23);

class Persona {
  private age;
  private name;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getSummary() {
    return 'My name us ' + this.name;
  }
}

const juan = new Persona('Juan', 25);
