"use client";

import style from "./signIn.module.css"
import { useRouter } from "next/navigation";

export default function LogIn() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/home/");
  }

  return (
    <div className = {style.container}>
      <div className = {style.signInContainer}>
        <div className = {style.signInBar}>
          Sign In
        </div>
        {/* <div className = {style.signInComponents}> */}
           <form id="contact-form" className = {style.signInComponents}>
            <label className={style.text} htmlFor="email">Email</label>
            <br /><br />
            <input
              className={style.input}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <br /><br />

            <label className={style.text} htmlFor="password">Password</label>
            <br /><br />
            <input
              className={style.input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <br /><br />

            <input
              className={style.submit}
              type="submit"
              onClick = {handleClick}
              value="Submit"
            />
           </form>
        {/* </div> */}
      </div>
    </div>

  );
}
