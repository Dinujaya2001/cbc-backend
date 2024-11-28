import express from "express";
import Student from "../models/student.js";
import { getStudent ,createStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();


studentRouter.get("/", getStudent)
studentRouter.post("/", createStudent)

export default studentRouter;