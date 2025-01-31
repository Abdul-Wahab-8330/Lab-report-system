import React from 'react'
import Navbar from './Navbar'
const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page reload
        alert("Message Sent!");
    };
    return (
        <div className='dark:bg-slate-900 dark:text-white h-screen'>
            <div>
                <Navbar />
            </div>
            <br /><br /><br /><br />
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg dark:bg-slate-900 dark:text-white dark:border dark:border-slate-500">
                <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-3">
                        {/* Name */}
                        <label className="dark:text-white text-gray-600 font-medium">Name</label>
                        <input required type="text" placeholder="Enter Name" className="dark:bg-slate-900 dark:text-white border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        {/* Email */}
                        <label className="dark:text-white text-gray-600 font-medium">Email</label>
                        <input required type="email" placeholder="Enter Email" className="dark:bg-slate-900 dark:text-white border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        {/* Message */}
                        <label className="dark:text-white text-gray-600 font-medium">Message</label>
                        <textarea required placeholder="Type your message" className="dark:bg-slate-900 dark:text-white border p-2 rounded-lg focus:outline-none focus:ring-2 " rows="4"></textarea>

                        {/* Submit Button */}
                        <button type='submit' className=" bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-200 mt-2">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact
