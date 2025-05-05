import React, { useState } from 'react'
import validator from "validator"

const password_valid = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const validatePassword = (value) =>{
        if (!validator.isStrongPassword(value, { minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1, minNumbers: 1 })) {
            setErrorMessage("Password must be at least 8 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 symbol, and 1 number.");
        } 
        
        else {
            setErrorMessage("Is Not Strong Password");
        }
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Checking Password Strength
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Enter Password:
          </label>
          <input
            type="text"
            onChange={(e) => validatePassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {errorMessage && (
          <div className="text-sm font-semibold text-red-600 mt-2">
            {errorMessage}
          </div>
        )}
      </div>
    <button
        onClick={() => alert("Your password is so strong")}
        className="mt-4 px-4 py-2 bg-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
        Check Password Strength
    </button>
    </div>
  ); 
} 


export default password_valid;