"use client";

import { SignInButton, SignUpButton, SignedOut, useUser } from '@clerk/nextjs'
import style from "./signIn.module.css"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image'

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
      <div className = {style.innerContainer}>
        <div style = {{marginBottom: '50px'}}>
          <div className = {style.titleText}>
            Welcome to DayLog! 
          </div>
          <div className = {style.text}>
            A Clear Space for Your Thoughts.
          </div>
        </div>

        <SignedOut>
          <SignInButton>
            <button className = {style.button} style = {{backgroundColor: 'white'}}>
              Sign In
            </button>
          </SignInButton>
          <div className = {style.text}>Or</div>
          <SignUpButton >
            <button className = {style.button} style = {{backgroundColor: 'lightSkyBlue'}}>
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
      <Image className = {style.image} src = '/cover.jpeg' alt = "Cover Image" width = {300} height = {100}/>
    </div>

  );
}
