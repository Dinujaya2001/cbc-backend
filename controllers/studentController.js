import Student from "../models/student.js"

export function getStudent(req, res){
    Student.find().then((studentList) => {
        res.json({
            List: studentList
        })
    }
    )
}
export function createStudent(req, res) {
    const student = new Student(req.body)
    student.save().then(() => {
      res.json({
        message: "student created"
      })
    }).catch(() => {
      res.json({
        message: "student not created"
      })
    })
  }