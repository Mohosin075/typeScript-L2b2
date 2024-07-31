{// function

// function add(num1 : number, num2 : number) : number{
//     return num1 + num2
// }
// add(5, 5)

const addArrow = (num1 : number, num2 : number) : number => num1 + num2


// object ----> function -------> method

const poorUser = {
    name : 'Mohosin',
    balance : 0,
    addBalance (balance : number) : string{
        return `My new balance is ${this.balance + balance}`
    }
}


const arr : number[]=[5,4,8]

const newArr : number [] = arr.map((elm : number) : number=> elm * elm)





}