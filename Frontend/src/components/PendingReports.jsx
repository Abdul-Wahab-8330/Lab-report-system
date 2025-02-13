import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const PendingReports = () => {
    const [patients, setPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchRef, setSearchRef] = useState("");
    const [filterDate, setFilterDate] = useState("");

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const res = await axios.get("http://localhost:4001/patients");
                const data = res.data;
                setPatients(data);
            } catch (error) {
                console.log("Error fetching patients:", error);
            }
        };
        fetchPatients();
    }, []);

    // Filter only Pending Reports
    const pendingPatients = patients.filter((patient) => {
        const formattedPatientDate = patient.createdAt ? new Date(patient.createdAt).toISOString().split('T')[0] : "";

        return (
            patient.status !== "Completed" && // Only show pending reports
            (searchQuery === "" || patient.patientName.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (searchRef === "" || patient.refNo.toLowerCase().includes(searchRef.toLowerCase())) &&
            (filterDate === "" || formattedPatientDate === filterDate)
        );
    });

    return (
        <div>
            <Navbar />
            <div className="pt-[88px]"></div>
            <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
                <h2 className="text-3xl font-bold mb-6">Pending Reports ({pendingPatients.length})</h2>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search by Name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-3 border rounded-md w-full md:w-1/3 dark:bg-gray-800 dark:border-gray-700"
                    />
                    <input
                        type="text"
                        placeholder="Search by Ref no..."
                        value={searchRef}
                        onChange={(e) => setSearchRef(e.target.value)}
                        className="p-3 border rounded-md w-full md:w-1/3 dark:bg-gray-800 dark:border-gray-700"
                    />
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                        className="p-3 border rounded-md w-full md:w-1/3 dark:bg-gray-800 dark:border-gray-700"
                    />
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700">
                                <th className="p-3">Ref. No</th>
                                <th className="p-3">Patient Name</th>
                                <th className="p-3">Total Tests</th>
                                <th className="p-3">Gender</th>
                                <th className="p-3">Phone No.</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Time</th>
                                <th className="p-3">Report Status</th>
                                <th className="p-3">Enter Results</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingPatients.slice().reverse().map((patient, index) => (
                                <tr key={index} className="border-b dark:border-gray-600">
                                    <td className="p-3">{patient.refNo}</td>
                                    <td className="p-3">{patient.patientName}</td>
                                    <td className="p-3 text-center">{patient.tests.length}</td>
                                    <td className="p-3">{patient.gender}</td>
                                    <td className="p-3">{patient.phoneNumber}</td>
                                    <td className="p-3">
                                        {new Date(patient.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </td>
                                    <td className="p-3">
                                        {new Date(patient.createdAt).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true
                                        })}
                                    </td>
                                    <td className="p-3 font-bold text-red-500">Pending</td>
                                    <td className="p-3">
                                        <Link to={`/patients/${patient._id}`} className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
                                            Enter Results
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PendingReports;