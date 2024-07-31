{
  // generic

  type GenericArray<T> = Array<T>;

  const rollNumber: GenericArray<number> = [2, 4, 6];

  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y"];

  const boolArr: GenericArray<boolean> = [true, false, false];

  const user: GenericArray<{name : string, age : number}> = [
    {
      name: "Mohosin",
      age: 20,
    },
    {
      name: "Sayed",
      age: 30,
    },
  ];


//   generic tuple

  type GenericTuple<X, Y> = [X , Y]

  const manus : GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];

  const userWithID : GenericTuple<number, {name : string, email : string}> = [1243, {name : 'mohosin', email : 'mohosin@gamil.com'}]




}
