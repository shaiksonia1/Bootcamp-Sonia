"use client"
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Card from './Card';

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);  // New state to track submission

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Regex to check if the username contains only alphabets and spaces
    const namePattern = /^[A-Za-z\s]+$/;

    if (!username.trim()) {
      setError('Please enter your username');
    } else if (!namePattern.test(username.trim())) {
      // Check if the username contains only letters and spaces
      setError('Username must only contain letters and spaces');
    } else {
      setError('');
      setGreeting(`Hello ${username}, Nice to meet you 🤚🏻`);
      setIsSubmitted(true);  // Set submission state to true
    }
  };

  const handleBack = () => {
    // Reset form state when going back
    setIsSubmitted(false);
    setUsername('');
    setError('');
    setGreeting('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      {isSubmitted ? (
        // Display only the greeting message after form submission
        <div className="space-y-6 p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg max-w-md w-[90%]">
          <Card
            message={greeting}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-md shadow-xl"
          />
          <Button
            onClick={handleBack}
            className="w-full bg-gradient-to-r from-teal-500 to-lime-400 text-white p-3 rounded-md shadow-lg hover:opacity-90 transition duration-300"
          >
            Back
          </Button>
        </div>
      ) : (
        // Display the form until submission
        <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg max-w-md w-[90%]">
          <h2 className="text-3xl font-bold text-center text-gray-900">Welcome to the App!</h2>
          <h3 className="text-l font-bold text-center text-gray-900">         
                   NextJs-Basics(Ex-1)
            </h3>

          
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="border-2 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
          />

          {/* Display error message if the username is invalid */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-lime-400 text-white p-3 rounded-md shadow-lg hover:opacity-90 transition duration-300"
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default Form;
