import { createContext, useContext, useState } from "react";

const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState({
    nombre: "",
    libroId: "",
  });

  const [activity, setActivity] = useState({});
  const [progress, setProgress] = useState({});
  const [flashCard, setFlashCard] = useState({});

  const getCourseForUpdate = (newCourse) => {
    setCourse(newCourse);
  };
  const setActivityData = (newForum) => {
    setActivity(newForum);
  };

  const getStudentProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const setFlashCardData = (flashCardData) => {
    setFlashCard(flash);
  };

  return (
    <CourseContext.Provider
      value={{
        course,
        getCourseForUpdate,
        activity,
        setActivityData,
        progress,
        getStudentProgress,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
