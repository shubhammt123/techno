"use client"

import { useRouter } from "next/navigation";

export default function Register(){
    const router = useRouter();
    const handleClick = ()=>{
        console.log("Register Button Clicked");
        router.push("/login");
    }
    return <div>
        <h1>Register Page
      </h1>
      <button onClick={handleClick}>Register</button>
    </div>
}