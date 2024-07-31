{
    // interface


    type User = {
        name : string;
        age : number
    }

    interface User2 {
        name : string;
        age : number;
    }

    const user2 : User2 ={
        name : 'mohosin',
        age : 20
    }

    type UserWithRole1 = User & {role : string};

    interface UserWithRole2 extends User2 {
        role : string
    }

    const userWithRole : UserWithRole1 ={
        name : 'mohosin',
        age : 20,
        role : 'student'
    }

    const userWithRoleUsingInterface : UserWithRole2 ={
        name : 'mohosin',
        age : 20,
        role : 'student'
    }


    // array with using interface

    type Roll1 = number[];

    const roll1 : Roll1 = [1,2,3,4]

    interface Roll2 {
        [index : number] :number
    }

    const roll2 : Roll2 = [1,2,3,4]

    // function

    

    type Add1 = (num1 : number, num2 : number) => number

    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add : Add2 =(num1, num2)=> num1 + num2

    




}