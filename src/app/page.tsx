"use client";

import { SignInButton, SignUpButton, SignedOut, useUser } from '@clerk/nextjs'
import style from "./signIn.module.css"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LogIn() {

  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/home");
    }
  }, [isSignedIn, router]);

  return (

    <div className= {style.container}>
      <SignedOut>
        <SignInButton>
          <button className = {style.button} style = {{backgroundColor: 'white'}}>
            Sign In
          </button>
        </SignInButton>
        <SignUpButton >
          <button className = {style.button} style = {{backgroundColor: 'lightSkyBlue'}}>
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
    </div>

  );
}
