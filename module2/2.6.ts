{
  // constrain

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web development";
    return {
      ...student,
      course,
    };
  };

  //   const st3 = addCourseToStudent({emni : 'emni'})

  const st1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 6465,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "FrontEnd",
  });

  const st2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 6466,
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple",
  });
}
