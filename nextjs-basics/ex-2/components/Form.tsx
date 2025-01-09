"use client";
import React, { useState } from "react";
import Input from "./Input";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import ThemeToggle from "./theme-toggle"; // ✅ Import ThemeToggle component
import { Button } from "@/components/ui/button"; // ✅ ShadCN's Button

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { theme } = useTheme(); // Destructure 'theme' from the hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;

    if (!username.trim()) {
      setError("Please enter your username");
    } else if (!namePattern.test(username.trim())) {
      setError("Username must only contain letters and spaces");
    } else {
      setError("");
      setGreeting(`Hello ${username}, Nice to meet you 🤚🏻`);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setUsername("");
    setError("");
    setGreeting("");
  };

  return (
    <>
      {/* ✅ Only one Header */}
      <Header />

      {/* ✅ Only one ThemeToggle below Header */}
      <div className="flex justify-center my-4">
        <ThemeToggle />
      </div>

      <div className="flex justify-center items-center h-screen">
        {isSubmitted ? (
          <div className="space-y-6 p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg max-w-md w-[90%]">
            <Card
              message={greeting}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-md shadow-xl"
            />
            <Button
              onClick={handleBack}
              variant="secondary" // ✅ ShadCN secondary variant
              className="w-full"
            >
              Back
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg max-w-md w-[90%]"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Welcome to the App!
            </h2>
            <h3 className="text-l font-bold text-center text-gray-600">         
                   NextJs-Basics(Ex-2)
            </h3>

            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className={`border-2 border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            />


            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <Button
        type="submit"
        variant="default" // ShadCN primary button
        className={`w-full ${theme === "dark" ? "text-black" : "text-white"}`}
      >
        Submit
      </Button>
          </form>
        )}
      </div>

      {/* ✅ Footer remains at the bottom */}
      <Footer />
    </>
  );
};

export default Form;
