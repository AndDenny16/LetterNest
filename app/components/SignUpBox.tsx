"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [pass2, setPass2] = useState<string>("");
  const [email, setEmail] = useState<string>("");


  const handleSubmit = async () => {
    setError("");
    try {
      const res = await fetch("/api/auth/SignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"email": email, "password": pass }),
      });
      console.log("this is our", res);
      if (!res.ok) {
        const errData = await res.json();
        console.log(errData);
        throw new Error(errData.message || "Sign up failed");
      }
      router.push(`/confirm?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      console.log("Sign UP Error")
      setError(err.message);
    }
  };

    
    return (
            <div className="card bg-base-100 w-96 h-[400px] shadow-xl border-2 border-green-800">
            <div className="card-body items-center">
                <h2 className="text-xl font-bold mb-4 text-green-800">Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered input-success w-full max-w-xs"
                    onChange = {(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    onChange = {(e) => setPass(e.target.value)}
                    className="input input-bordered input-success w-full max-w-xs" />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered input-success w-full max-w-xs"
                    onChange = {(e) => setPass2(e.target.value)} />
                <div className="card-actions justify-end mt-4">
                    <button className= "btn bg-green-800 text-white" onClick={() => handleSubmit()}>Sign Up</button>
                </div>
                <button className= "p-2 text-green-800 text-xs" onClick={() => router.push("/SignIn")}>Sign In Instead?</button>
                <h2>{error}</h2>
            </div>
        </div>
      );

    };
