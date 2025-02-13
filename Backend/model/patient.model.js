import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    refNo: {
      type: String,
      required: true,
      unique: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    cnicNo: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dob: {
      type: Date,
    },
    age: {
      type: Number,
      required: true,
    },
    consultant: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    tests: [
      {
        testName: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        result: {
          type: String, // Stores test result
          default: null, // Null until a result is provided
        },
        resultEnteredAt: {
          type: Date, 
          default: null, // 🔹 Ensure this field is always created
          required: false, // Null until a result is added
        },
      },
    ],
  },
  { timestamps: true }
);

// Middleware to update status dynamically
patientSchema.pre("save", function (next) {
  const allTestsCompleted = this.tests.every((test) => test.result !== null);
  this.status = allTestsCompleted ? "Completed" : "Pending";
  next();
});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;
