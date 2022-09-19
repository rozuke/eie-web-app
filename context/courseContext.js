import { createContext, useContext, useState } from "react";

const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState({
    nombre: "",
    libroId: "",
  });

  const [forum, setForum] = useState({});
  const [progress, setProgress] = useState({});

  const getCourseForUpdate = (newCourse) => {
    setCourse(newCourse);
  };
  const getForumForUpdate = (newForum) => {
    setForum(newForum);
  };

  const getStudentProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <CourseContext.Provider
      value={{
        course,
        getCourseForUpdate,
        forum,
        getForumForUpdate,
        progress,
        getStudentProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
