{
// utility type

// Pice

type Person = {
    name : string;
    age : number;
    email?: string;
    contactNo : string
}

type NameAge = Pick<Person, 'name' | 'age'>

// Omit

type Contact = Omit<Person, 'name' | 'age'>


// required

type PersonRequired = Required<Person>

// Pertial 

type PersonPertial = Partial<Person>



// readOnly

type PersonReadOnly = Readonly<Person>



// Record

type MyObj = Record<string, string>

const emptyObj : Record<string, unknown>= {}


const obj1 : MyObj = {
    a : 'aa',
    b : 'bb',
}


}