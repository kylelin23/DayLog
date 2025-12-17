import Link from 'next/link'
import style from './TopBar.module.css'

export default function TopBar() {
    return(
        <header className={style.navbar}>
            <h1><Link href="/" className={style.logo}>DayLog</Link></h1>
        </header>
    )
}