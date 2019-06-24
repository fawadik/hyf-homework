//const fs = require("fs");
const Mentors = require("./mentors.js")
hyf_mentors = new Mentors();
class Courses {
    constructor () {
        this.courses = [
            {
                "name": "NodeJS",        
                "duration": "5 Weeks"        
            },
            {
                "name": "JS",        
                "duration": "9 Weeks"
                
            },
            {
                "name": "HTML/CSS",        
                "duration": "3 Weeks"        
            }
        ]
    }
    getList() {        
        // this.courses.forEach(course =>{
        //     course["mentor"] = hyf_mentors.getMentorsByCourseTitle(course.Title);
        // })
        return this.courses;

    }
    getCourseByName (courseName) {              
        const allCourses = this.getListOfCourses();
        return allCourses.find(requiredCourse => requiredCourse.name.toLowerCase() === courseName.toLowerCase());
    }
    addCourse(newCourse) {        
            if (this.getCourseByname(newCourse.name)) {
                return "Course already Exists";
            }

            const allCourses = this.getListOfCourses();
            allCourses.push(newCourse);
            
            const newCourses = JSON.stringify(allCourses, null, 4);
            fs.writeFileSync(this.courses, newCourses);
            return "Course successfuly added";
       
    }    
}

module.exports = Courses;
