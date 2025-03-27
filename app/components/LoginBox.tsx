'use client'
import React, { useRef, useState } from 'react'
import NavButton from './NavButton';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

const LoginBox = () => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const searchParams = useSearchParams();
    const [error, setError] = useState<string>("");
    const callbackUrl = searchParams.get("callbackUrl") ?? "/Home";
    const router = useRouter();

    const submit = async() => {
        try{
            console.log("This function been called burh")
            const res = await signIn("credentials", 
                {email: email, 
                    password: pass,
                    redirect: false})

            console.log("this is the ressy my guy", res)

            if (res?.error === "CredentialsSignin"){
                setError("Invalid Email or Password");
            } else if (res?.error){
                setError(res.error);
            }
            else{
                router.push(callbackUrl);
            }
        }catch(error){
            console.log("im so tired of this")
        }
    }

  return (
        <div className="card bg-base-100 w-96 h-[400px] shadow-xl border-2 border-green-800">
        <div className="card-body items-center">
            <h2 className=" text-green-800 text-xl font-bold mb-4">Sign In</h2>
            <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-success w-full max-w-xs"
                onChange = {(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Password"
                onChange = {(e) => setPass(e.target.value)}
                className="input input-bordered input-success w-full max-w-xs" />
            <div className="card-actions justify-end mt-4">
                <button className= "btn bg-green-800 text-white" onClick={() => submit()}>Sign In</button>
            </div>
            <button className= "text-green-800 text-xs" onClick={() => router.push("/SignUp")}>Sign Up Instead?</button>
            <h1>{error}</h1>
        </div>
    </div>
    );
}

export default LoginBox