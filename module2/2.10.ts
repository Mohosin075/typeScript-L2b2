{
// map type

const arrayOfNumber : number[] = [1,2,5];


const arrayOfStrings = arrayOfNumber.map(number=>number.toString())

console.log(arrayOfStrings);





// type AreaString = {
//     width : string;
//     height : string
// }


type AreaString<T> = {
    [key in keyof T] : T[key]
}

const area1 : AreaString<{height : string, width : number}> =   {
    height : '1000',
    width  : 45
}


// type AreaNumber = {
//     [key in keyof AreaString] :  number
// }






}