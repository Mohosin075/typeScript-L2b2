{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: string;
    address: string;
  };

  const student1: Student = {
    name: "mohosin",
    age: 654,
    gender: "male",
    contact : 'lsdfjk',
    address: "sdfsf68",
  };



  const studen2: Student = {
    name: "mohosin",
    age: 654,
    gender: "male",
    address: "sdfsf68",
  };



  type IsAdmin = boolean
  type Name = string

  const isAdmin : IsAdmin = true;

  const name : Name = "Md Mohosin Ali"

  type Add = (num1 : number, num2 : number) => number

  const add : Add =(num1, num2)=> num1 + num2




}
