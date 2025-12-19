"use client";

import { SignInButton, SignUpButton, SignedOut } from '@clerk/nextjs'
import style from "./signIn.module.css"

export default function LogIn() {

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
