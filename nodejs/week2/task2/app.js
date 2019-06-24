const http = require('http');
const Courses = require('./courses');
const hyf_courses = new Courses();

const bodyParser = require('body-parser')


const express = require('express')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Welcome to HYF Course app using express!'))


app.get('/courses', (req, res) => res.send(hyf_courses.getList()))
app.get('/course/:title', (req, res) => {
  res.send(hyf_courses.getCourseByTitle(req.params.title));
})

app.post('/courses', (req, res) => {

  if (hyf_courses.addCourse(req.body)) {
    res.status(201);
    res.send('course added');
  } else {
    res.status(400);
    res.send('failed to add');
  }


})

app.listen(port, () => console.log(`HYF course app listening on port ${port}!`))


// const server = http.createServer((req, res) => {
//   const url = req.url;
// // console.dir(req, {
// //   'depth': 0
// // });
// // console.log(url);

//   if (url == '/') {
//     res.end('Welcome to HYF Course app !!!!')
//   } else if (url == '/getList' && req.method == 'GET') {
//     const result = hyf_courses.getList();


//     res.statusCode = 200;
//     res.end(JSON.stringify(result));
//   } else if (url == '/getList' && req.param('title') && req.method == 'GET') {
//     const result = hyf_courses.getList();
//     res.statusCode = 200;
//     res.end("Course");
//   } 

//   // else {
//   //   res.statusCode = 404;
//   //   res.end('Not Found')
//   // }
// });

// server.listen(port, () => {
//   console.log('HYF app is running (8001)...');
// })



// const http = require("http");
// const Courses = require("./courses.js");
// const hyf_courses = new Courses ();

// const express = require("express");
// // const cors = require("cors")
// const app = express();
// // app.use(express.json());
// // app.use(cors())

// // const mentorsJson = require("./mentors.json");
// // const Mentor = require("./mentors.js");

// // const coursesJosn = require("./courses.json")
// // const Courses = require("./courses.js")

// // const hyf_mentors = new Mentor(mentorsJson)
// // const hyf_courses = new Courses(coursesJosn);

// app.get("./courses", function(req, res) {
//     const allCourses = hyf_courses.getList();
//     res.send(allCourses);
//  });


app.listen(3000);
console.log("Server is running")
console.log(hyf_courses.getList());