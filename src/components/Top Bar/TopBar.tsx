import Link from 'next/link'
import style from './TopBar.module.css'
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function TopBar() {
    return(
        <header className={style.navbar}>
            <h1>
                <Link href="/home" className={style.logo}>DayLog</Link>
            </h1>
            <div className = {style.userButton}>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    )
}