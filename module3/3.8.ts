{
  // polymorphism

  class Person {
    getSleep() {
      console.log("I am sleep in 8 hour");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleep in 7 hour");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("I am sleep in 6 hour");
    }
  }


  const getSleepingHour = (param : Person) =>{
    param.getSleep()
  }


  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();




getSleepingHour(person1)
getSleepingHour(person2)
getSleepingHour(person3)



class Shape {
    getShape() : number{
        return 0
    }
}


class Circle extends Shape {
    radius : number

    constructor(radius : number){
        super()
        this.radius = radius
    }

    getShape(): number {
        return Math.PI * this.radius * this.radius
    }
}


class Reactangle extends Shape {
    width : number;
    height : number;

    constructor(width : number , height : number){
        super();
        this.width = width;
        this.height = height
    }

    getShape(): number {
        return this.width * this.height
    }

}


const getShapeArea =(param : Shape)=>{
    console.log(param.getShape());
}


const shape1 = new Shape();
const shape2 = new Circle(7);
const shape3 = new Reactangle(5,8);


getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)







}
