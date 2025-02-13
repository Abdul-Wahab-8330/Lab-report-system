import express from "express";
import {
  createPatient,
  getAllPatients,
  updatePatient,
  deletePatient,
  getPatientById, 
  updateTestResult
} from "../controller/patient.controller.js";

const router = express.Router();

// ✅ Route to Get Patient Details
router.get("/patients/:id", getPatientById);
// ✅ Route to Update a Test Result
router.patch("/:id/tests/:testName", updateTestResult);


router.post("/", createPatient); // Create a new patient
router.get("/", getAllPatients); // Get all patients
router.get("/:id", getPatientById); // Get a single patient
router.put("/:id", updatePatient); // Update a patient
router.delete("/:id", deletePatient); // Delete a patient

export default router;
