{
  // abstraction ------> 1. interface use kore and 2. abstract use kore

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }

    stopEngine(): void {
      console.log("I am stopping the car engine ");
    }

    move(): void {
      console.log("I am moving the car");
    }

    test() {
      console.log("I am testing the car");
    }
  }

  const toyota = new Car();

  toyota.startEngine();


//   use abstract
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("i am testing");
    }
  }


  class Car2 extends Vehicle2 {
    startEngine(): void {
        console.log('i am starting engine');
    }
    stopEngine(): void {
        console.log('i am stopping engine');
    }
    move(): void {
        console.log('i am moving engine');
    }
  }

  const hondaCar = new Car2()

  hondaCar.startEngine()











}
