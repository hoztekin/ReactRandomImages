import "./App.css";
import Course from "./course";
import { useState } from "react";

function getRandomCourse() {
  const CourseArray = ["Angular", "Bootstrap", "Ccsharp", "KompleWeb"];
  return CourseArray[Math.floor(Math.random() * CourseArray.length)];
}

function App() {
  const [courses, setcourses] = useState([]);
  const handleClick = () => {
    setcourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="AppBtn" onClick={handleClick}>
        Kurs ekle
      </button>
      <div className="courseList">{courseList}</div>
      {/* {courses.map((course, index) => {
        return <Course key={index} courseName={course} />;
      })} */}
    </div>
  );
}

export default App;
