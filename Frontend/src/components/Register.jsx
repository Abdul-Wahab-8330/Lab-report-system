import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

  const testPrices = {
    "Blood Test": 600,
    "X-Ray": 700,
    "MRI": 800,
    "CT Scan": 500, // Added one more test option
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const generateRefNo = () => {
    return `REF-${Math.floor(100000 + Math.random() * 900000)}`;
  };

  const [refNo, setRefNo] = useState(generateRefNo());
  const [tests, setTests] = useState([]);
  const [testName, setTestName] = useState("");
  const [amount, setAmount] = useState("");

  // const onSubmit = (data) => {
  //   console.log("Patient Registered:", { ...data, refNo, tests });
  //   reset();
  //   setRefNo(generateRefNo());
  //   setTests([]);
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/patients", {
        ...data, 
        refNo, 
        tests
      });
      toast.success('Patient Registered!')
      console.log("Patient Registered Successfully:", response.data);

      reset();
      setRefNo(generateRefNo());
      setTests([]);
    } catch (error) {
      console.error("Error registering patient:", error.response?.data || error);
    }
  };
  const addTest = () => {
    if (!testName || !amount) return;
    const newTest = {
      testName,
      amount,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };
    setTests([...tests, newTest]);
    setTestName("");
    setAmount("");
  };

  const removeTest = (index) => {
    setTests(tests.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-6 px-4 min-h-screen">
      <Navbar />
      <div className="pt-16"></div>
      <div className="w-full border border-gray-400 dark:border-gray-500 mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 dark:bg-slate-900 text-white">
        <div className="flex justify-between ">
          <h2 className="text-3xl dark:text-white font-bold text-black mb-6 text-left ">
            Patient Registration
          </h2>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-transparent text-red-600 px-3 text-base rounded-full shadow-md border dark:border-gray-600  hover:shadow-xl transition-all duration-300"
          >
            <AiOutlineDelete className="text-xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Existing Patient Registration Form */}
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">Reference No</label>
              <input type="text" value={refNo} readOnly className="w-full px-4 py-3 border rounded-md bg-gray-200 font-semibold text-gray-700" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">Patient Name <span className="star">*</span></label>
              <input type="text" {...register("patientName", { required: "Patient Name is required" })} className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF] text-black" placeholder="Enter Patient Name" />
              {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">Phone Number <span className="star">*</span></label>
              <input type="tel" {...register("phoneNumber", { required: "Phone Number is required" })} className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF] text-black" placeholder="Enter Phone Number" />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">CNIC No <span className="star">*</span></label>
              <input
                type="text"
                {...register("cnicNo", { required: "CNIC is required" })}
                className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF] text-black "
                placeholder="Enter CNIC Number"
              />
              {errors.cnicNo && <p className="text-red-500 text-sm">{errors.cnicNo.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold dark:text-white   ">Gender <span className="star">*</span></label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF]  text-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">Date of Birth</label>
              <input
                type="date"
                {...register("dob")} placeholder="dob (Optional)"
                className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF]  text-black"
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold dark:text-white  ">Age <span className="star">*</span></label>
              <input
                type="number"
                {...register("age", { required: "Age is required" })}
                className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF]  text-black"
                placeholder="Enter Age"
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold dark:text-white">Consultant <span className="star">*</span></label>
              <select
                {...register("consultant", { required: "Age Type is required" })}
                className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-[#0000FF] text-black"
              >
                <option value="">Consultant</option>
                <option value="dr brown">Self </option>
                <option value="dr brown">Dr Brown </option>
                <option value="dr kaleem">Dr Kaleem</option>
                <option value="dr khalids">Dr Khalid</option>
              </select>
              {errors.ageType && <p className="text-red-500 text-sm">{errors.ageType.message}</p>}
            </div>

          </div>


          <h3 className="text-3xl text-left font-bold text-black dark:text-white">Add Tests</h3>


          <div className="grid grid-cols-3 gap-6">
            <select
              className="w-full px-4 py-3 border rounded-md text-black"
              value={testName}
              onChange={(e) => {
                setTestName(e.target.value);
                setAmount(testPrices[e.target.value] || ""); // Auto-fill amount
              }}
            >
              <option value="">Select Test</option>
              {Object.keys(testPrices).map((test) => (
                <option key={test} value={test}>{test}</option>
              ))}
            </select>

            <input
              type="number"
              className="w-full px-4 py-3 border rounded-md text-black"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              type="button"
              className="text-black dark:text-white border border-dashed border-black dark:border-white px-4 py-2 text-base font-semibold rounded-lg flex items-center gap-2 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300"
              onClick={addTest}
            >
              <FaPlus className="text-lg" />
              Add Test
            </button>

          </div>


          {/* Tests Table */}
          {tests.length > 0 && (
            <table className=" w-full mt-6 border border-gray-300 text-black text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-center">Test Name</th>
                  <th className="p-3 text-center">Date</th>
                  <th className="p-3 text-center">Total Amount</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test, index) => (
                  <tr key={index} className="dark:text-white border-b border-gray-300 text-center">
                    <td className="p-3">{test.testName}</td>
                    <td className="p-3">{test.date}</td>
                    <td className="p-3">{test.amount}</td>
                    <td className="p-3">
                      <button
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-300 text-center"
                        onClick={() => removeTest(index)}
                      >
                        <FaDeleteLeft className="text-xl" />
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {/* Submit Button */}
          {tests.length > 0 && (<div className="flex justify-end space-x-3">
            <button
              type="submit"
              className="bg-[#1DBF73] text-white py-3 px-6 text-base font-semibold rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300"
            >
              Register Patient
            </button>


          </div>)}
        </form>
      </div>
    </div>
  );
};

export default Register;