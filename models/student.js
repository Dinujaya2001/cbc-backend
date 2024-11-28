import mongoose from "mongoose"


const studentModel = mongoose.Schema({
    name: String,
    age: Number,
    gender: String
})
const Student = mongoose.model("student",studentModel)

export default Student