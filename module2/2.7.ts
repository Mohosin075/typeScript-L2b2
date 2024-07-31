{
    // generic constrain with key off


    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = 'bike' | 'car' | 'ship';


    type Owner2 = keyof Vehicle


    const person : Owner2 = 'car'




    const getPropertyValue =<X, Y extends keyof X>(obj : X, key : Y)=>{
        return obj[key]
    }


    const user ={
        name : 'Mr X',
        age : 26
    }


    const car = {
        model : 'FSDKLF',
        release : 646
    }
    const result1 = getPropertyValue(car, 'model')



}