'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export function FormClient() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });

        try {
            if (isLogin) {
                console.log("Logging in");
                const response = await axios.post("http://localhost:3000/api/useApi/Login", { email, password });
                console.log(response.data.token); // Optionally handle the response data
                // Set the token in a cookie
                Cookies.set("token", response.data.token, { expires: 7 }); // Expires in 7 days
                router.push("/pages/products"); // Use router.push for navigation
            } else {
                console.log("Signing up");
                await axios.post("http://localhost:3000/api/useApi/signUp", { email, password });
                alert("Registration successful!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <div className="mt-4 text-center">
                <button
                    type="button"
                    onClick={toggleForm}
                    className="text-sm text-green-600 hover:text-green-500"
                >
                    {isLogin ? 'Need an account? Sign up' : 'Already have an account? Log in'}
                </button>
            </div>
        </form>
    );
}
