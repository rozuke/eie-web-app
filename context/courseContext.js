import { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState({
    nombre: "",
    libroId: "",
  });

  const getCourseForUpdate = (newCourse) => {
    setCourse(newCourse);
  };

  return (
    <CourseContext.Provider value={{ course, getCourseForUpdate }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
