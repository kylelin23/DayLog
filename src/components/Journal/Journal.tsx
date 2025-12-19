import style from './journal.module.css';
import type { JournalFormat } from '@/src/database/journalSchema';

export default function Journal( { name, streak, password, color, body }: JournalFormat ) {
    return (
        <div className = {style.square} style = {{backgroundColor: color}}>
            <div className = {style.nameText}>{name}</div>
            <div className = {style.streakText}>Streak: {streak}</div>
        </div>
    )
}