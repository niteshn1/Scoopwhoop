"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login success");
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <>
      <div className="bg-blue-200 pl-9 pt-9">
        <Link href="/">
          <div className="">
            <img width="92" height="68" src="/full_logo.svg" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-200">
        <h1 className="text-xl">
          {loading ? "Processing" : "Sign in to ScoopWhoop"}
        </h1>
        <h2 className="text-s">
          to get personalized suggestions,save articles and videos for later
          and,
        </h2>
        <h3 className="text-s">engage with ScoopWhoop community.</h3>
        <hr />

        <label htmlFor="email">Email</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Please Enter Password"
        />
        <button
          onClick={onLogin}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        >
          Login here
        </button>
        <Link href="/signup">Visit Signup page</Link>
      </div>
    </>
  );
}
