import style from './journal.module.css';

export default function Journal() {
    return (
        <div className = {style.square}>
            <div className = {style.nameText}>Gratitude</div>
            <div className = {style.streakText}>Streak: 2</div>
        </div>
    )
}