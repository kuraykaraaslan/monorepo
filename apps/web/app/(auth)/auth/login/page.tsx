'use client';
import React, { useState, useEffect } from 'react';


const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const LoginPage = () => {

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);



    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
   

    }

    return (
        <>
            <div className="space-y-6">
                <div>
                    <label htmlFor="email" className={"block text-sm font-medium leading-6"}  >
                        Email address {NEXT_PUBLIC_API_URL  }
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={email ? email : ""}
                            onChange={(e) => setEmail(e.target.value)}
                            className={"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset placeholder:text-primary sm:text-sm sm:leading-6"}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6">
                            Password
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password ? password : ""}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full py-2.5 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Sign in
                    </button>
                </div>
            </div>
        </>
    );
};

LoginPage.layout = "auth";

export default LoginPage;