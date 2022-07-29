import { createContext, useContext, useState } from "react";

const useCourse = () => {
  const [course, setCourse] = useState({
    nombre: "",
    libroId: "",
  });

  const getCourseForUpdate = (newCourse) => {
    setCourse(newCourse);
  };

  return { course, getCourseForUpdate };
};
export default useCourse;
// export const CourseProvider = ({ children }) => {
//   const [course, setCourse] = useState({
//     nombre: "",
//     libroId: "",
//   });

//   const getCourseForUpdate = (newCourse) => {
//     setCourse(newCourse);
//   };
//   return (
//     <CourseContext.Provider value={{ course, getCourseForUpdate }}>
//       {children}
//     </CourseContext.Provider>
//   );
// };

// export const useCourse = () => useContext(CourseContext);
