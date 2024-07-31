{


const age : number = 17;

if(age>=18){
    console.log('adult');
}else{
    console.log('not adult');
}

const isAdult = age >= 18 ? 'adult' : 'not adult'

console.log(isAdult);

// nullish operation ??
// its work only for null and undefine
const isAuthenticated = null

const result = isAuthenticated ?? 'Guest'
console.log(result);

type User = {
    name : string,
    age : number,
    address : {
        city : string,
        presentAddress : string,
        permanentAddress ?: string
    }
}

const user : User = {
    name : 'mohosin',
    age : 20,
    address : {
        city : "Dinajpur",
        presentAddress : 'Dinajpur',
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'no permanent address'

console.log(permanentAddress);



}