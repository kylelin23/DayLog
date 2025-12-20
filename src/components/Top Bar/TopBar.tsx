import Link from 'next/link'
import style from './TopBar.module.css'
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function TopBar() {
    return(
        <header className={style.navbar}>
            <h1>
                <Link href="/home" className={style.logo}>DayLog</Link>
            </h1>
                <SignedIn>
                    <div className = {style.account}>
                        <div style = {{color: 'black'}}>Account</div>

                        <UserButton appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: "35px",
                                    height: "35px",
                                },
                            },
                        }}/>
                    </div>
                </SignedIn>
        </header>
    )
}