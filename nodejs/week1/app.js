let students = require("./students.js");
let courses = require("./courses.js");
let mentors = require("./mentors.js");

class Courses {
    constructor (courses) {
        this.course = courses;
    }
    getList () {        
        console.log(courses);
    }
    getCourse (courseName) {              
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].name === courseName) {
                console.log(courses[i]);
            }
        }  
    }
    addCourse(newCourse) { 
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].name === newCourse.name) {
                return "Course already Exists";
            }
            else {
                courses.push(newCourse);
                return;
            }
        }       
    }    
}
class Mentors {
    constructor (mentor) {
        this.mentor = mentor;
    }
    getList () {        
        console.log(mentors);
    }
    deleteMentor(mentorName) {       
        
        for( let i = 0; i<mentors.length; i++) {           
            if (mentors[i].name === mentorName) {
                
                mentors.splice(i, 1);
                return;
            }            
        }
        return console.log("Mentor doesnt exist");
    }
}
class Students {
    constructor (studentName) {
        this.studentName = studentName;
    }
}
let hyf_courses = new Courses ();
let hyf_mentors = new Mentors ();

hyf_courses.getList();
hyf_courses.getCourse("NodeJS");

const newCourse =   {
    name: "Database",
    duration: "4",
    mentors: ["Benjamin", "Christopher", "Radoslaw"]
};
hyf_courses.addCourse(newCourse);
hyf_courses.getList();
hyf_mentors.getList();
hyf_mentors.deleteMentor("fowad")
hyf_mentors.getList();