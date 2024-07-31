{
    // instance of guard

    class Animal {
        name : string;
        species : string

        constructor(name : string, species : string){
            this.name = name
            this.species = species
        }

        makeSound(){
            console.log("I am making sound");
        }
    }


    class Dog extends Animal {
        constructor(name : string, species : string){
            super(name, species)
        }

        makeBark(){
            console.log('I am Barking');
        }
    }


    class Cat extends Animal {
        constructor(name : string, species : string){
            super(name, species)
        }

        makeMew(){
            console.log('I am Mewing');
        }
    }

    const isDog =(animal : Animal) : animal is Dog =>{
        return animal instanceof Dog
    }
    const isCat =(animal : Animal) : animal is Cat =>{
        return animal instanceof Cat
    }


    const getAnimal =(animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark();
        }else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }

    
    const dog = new Dog('Dog vi', 'dog')
    const cat = new Cat('Cat vi', 'cat')
    getAnimal(dog)


    







}