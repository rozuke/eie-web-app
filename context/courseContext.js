import { createContext, useContext, useState } from "react";

const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState({
    nombre: "",
    libroId: "",
  });

  const [forum, setForum] = useState({});

  const getCourseForUpdate = (newCourse) => {
    setCourse(newCourse);
  };
  const getForumForUpdate = (newForum) => {
    setForum(newForum);
  };

  return (
    <CourseContext.Provider
      value={{ course, getCourseForUpdate, forum, getForumForUpdate }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
