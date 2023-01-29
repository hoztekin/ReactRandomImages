import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import './course.css';
const courseMap = {
    // Angular : Angular,
    // Bootstrap : Bootstrap,
    // Ccsharp : Ccsharp,
    // KompleWeb : KompleWeb 
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb
};

function Course({courseName}) {
   
  return <div className="coursediv">
    <img className="course" src={courseMap[courseName]} alt="course"/>
  </div>;
}

export default Course;
