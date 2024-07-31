{
  // function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bd");
  const res2 = createArrayWithGeneric<string>("bd");

  interface User {
    id: number;
    name: string;
  }

  const res3 = createArrayWithGeneric<User>({ id: 333, name: "Md. X" });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("bd", 22);
  const res11 = createArrayWithTuple<string, { name: string }>("bd", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  const st1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "FrontEnd",
  });

  const st2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });




  
}
