"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { auth, provider, signInWithPopup } from "@/firebase"; 

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Logged in as:", user.displayName);
            onClose(); // Close the modal after successful login
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]"
            onClick={onClose}
        >
            <motion.div
                className="bg-[#0a0f34] p-6 rounded-2xl w-[90%] sm:w-[400px] shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent click on modal from closing it
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="mt-2 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#436ef5] text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                {/* Google Login Button */}
                <div className="my-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 flex items-center justify-center"
                    >
                        <FcGoogle className="mr-2" />
                        Login with Google
                    </button>
                </div>

                {/* Cancel Button */}
                <button
                    onClick={onClose}
                    className="w-full mt-4 text-center text-sm text-neutral-300 underline"
                >
                    Cancel
                </button>
            </motion.div>
        </motion.div>
    );
};

export default LoginModal;
