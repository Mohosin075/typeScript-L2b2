{
    // class in oop



    class Animal {
        constructor(public name : string, public species : string, public sound : string){
        }
        makeSound(){
            console.log(`the ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal('dog vi', 'dog', 'gew gew');
    const cat = new Animal('cat vi', 'cat', 'mew mew');

    dog.makeSound()







}