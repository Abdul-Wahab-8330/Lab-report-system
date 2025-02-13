import Patient from "../model/patient.model.js";
export const createPatient = async (req, res) => {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.status(201).json({ message: "Patient added successfully!", patient });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get all patients
  export const getAllPatients = async (req, res) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get a single patient by ID
//   export const getPatientById = async (req, res) => {
//     try {
//       const patient = await Patient.findById(req.params.id);
//       if (!patient) {
//         return res.status(404).json({ message: "Patient not found" });
//       }
//       res.status(200).json(patient);
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ error: error.message });
//     }
//   };
  
  // Update a patient's details\

  

  export const updatePatient = async (req, res) => {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPatient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.status(200).json({ message: "Patient updated successfully!", updatedPatient });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  // Delete a patient
  export const deletePatient = async (req, res) => {
    try {
      const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
      if (!deletedPatient) {
        return res.status(404).json({ message: "Patient not found" });
      }
      res.status(200).json({ message: "Patient deleted successfully!" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  };


  ////// new star frm hwewe


  

// ✅ Get Patient by ID
export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Update Test Result
export const updateTestResult = async (req, res) => {
  try {
    const { testName } = req.params;
    const { result } = req.body;

    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    // Find the specific test
    const testIndex = patient.tests.findIndex((test) => test.testName === testName);
    if (testIndex === -1) return res.status(404).json({ message: "Test not found" });

    // ✅ Update the test result and resultEnteredAt timestamp
    patient.tests[testIndex].result = result;
    patient.tests[testIndex].resultEnteredAt = new Date(); // Save timestamp

    // ✅ Check if all tests are completed
    const allTestsCompleted = patient.tests.every((test) => test.result !== null);
    if (allTestsCompleted) {
      patient.status = "Completed";
    }

    await patient.save();
    res.json({ message: "Test result updated successfully", patient });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
