{
    // type guard

    type AlfaNumeric = string | number

    const add =(param1 : AlfaNumeric, param2 : AlfaNumeric) : AlfaNumeric =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2
        }else {
            return param1.toString() + param2.toString()
        }
    }



    type NormalUser ={
        name : string
    }

    type AdminUser ={
        name : string;
        role : string
    }

    const getUser =(user : NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser = {
        name : 'Mr Normal vi'
    }
    const adminUser = {
        name : 'Mr Admin vi',
        role : 'student'
    }

    getUser(adminUser)








}