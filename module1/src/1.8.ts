{

// object destructuring

const user = {
    id : 4654,
    name : {
        firstName : 'mohosin',
        lastName : 'ali'
    },
    contact : '24523942039',
    address : 'dkk'

}


const {id, name : {firstName, lastName}} = user
    console.log(id);
}


const myFreind = ['jodu', 'kodu', 'modu', 'dl', 'dkj'];

const [, , c, ...rest] = myFreind

