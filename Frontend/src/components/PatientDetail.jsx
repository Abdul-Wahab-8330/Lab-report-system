import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
const PatientDetail = () => {
    const { id } = useParams(); // Get patient ID from URL
    const [patient, setPatient] = useState(null);
    const [selectedTest, setSelectedTest] = useState(null);
    
    // Fetch patient details
    useEffect(() => {
        const fetchPatient = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/patients/${id}`);
                setPatient(res.data);
            } catch (error) {
                console.log("Error fetching patient:", error);
            }
        };
        fetchPatient();
    }, [id]);

    // React Hook Form for handling test results
    const { register, handleSubmit, reset } = useForm();

    // Handle test result submission
    const onSubmit = async (data) => {
        try {
            await axios.patch(`http://localhost:4001/patients/${id}/tests/${selectedTest}`, { result: data.result });
            alert("Test result saved successfully!");
            console.log(data.result)
            // Update UI
            setPatient(prev => ({
                ...prev,
                tests: prev.tests.map(test => 
                    test.testName === selectedTest ? { ...test, result: data.result } : test
                ),
                status: prev.tests.every(test => test.result || test.testName === selectedTest) ? "Completed" : "Pending"
            }));

            setSelectedTest(null); // Hide the form after submission
            reset();
        } catch (error) {
            console.log("Error saving result:", error);
        }
    };

    if (!patient) return <p>Loading...</p>;

    return (
        <>
        <Navbar/>
        <div className="pt-20"></div>
        <div className="p-6 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">{patient.patientName}'s Details</h2>
            
            <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:bg-[#1F2937] dark:text-white">
                <p><strong>Ref No : </strong> {patient.refNo}</p>
                <p><strong>Gender : </strong> {patient.gender}</p>
                <p><strong>Phone No : </strong> {patient.phoneNumber}</p>
                <p><strong>CNC No : </strong> {patient.cnicNo}</p>
                <p><strong>Consultant : </strong> {patient.consultant}</p>
                <p><strong>Status : </strong> <span className={patient.status === "Completed" ? "text-green-500" : "text-red-500"}>{patient.status}</span></p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Tests</h3>
            <div className="flex flex-wrap gap-3">
                {patient.tests.map(test => (
                    <button 
                        key={test.testName} 
                        onClick={() => setSelectedTest(test.testName)} 
                        className={`px-4 py-2 rounded-md text-white ${test.result ? "bg-green-500" : "bg-blue-500"}`}>
                        {test.testName} {test.result ? "✔" : ""}
                    </button>
                ))}
            </div>

            {selectedTest && (
                <div className="mt-6 p-4 border rounded-md bg-gray-100 dark:bg-gray-900 dark:text-white">
                    <h4 className="text-lg font-semibold mb-2">Enter Result for {selectedTest}</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                            type="text"
                            {...register("result", { required: true })}
                            placeholder="Enter result..."
                            className="p-2 border rounded-md w-full dark:bg-slate-900 dark:text-white"
                        />
                        <button type="submit" className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
                    </form>
                </div>
            )}
        </div>
        </>
    );
};

export default PatientDetail;