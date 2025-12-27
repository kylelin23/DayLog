
import connectDB from '@/src/database/db';
import style from './journalPage.module.css'
import JournalFormat from '@/src/database/journalSchema';
import Link from 'next/link';
import JournalForm from '@/src/components/JournalForm/page';

export default async function JournalPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    await connectDB();

    const journal = await JournalFormat.findOne({ _id : slug });

    if (!journal) return <div>Journal not found</div>;

    function dateToString (date: Date) {
        return date.toDateString();
    }


    return(
        <div className = {style.container}>
            <Link href = './' className = {style.backButton}>Back</Link>
            <div className = {style.journalTypeText}>{journal.name}</div>
            <hr className={style.divider}></hr>
            <JournalForm slug = {slug}/>

            {/* PUT NEW JOURNAL ENTRY INPUT HERE */}
            {journal.body.map((entry: any, index: any) => (
                <div className = {style.entryContainer} key = {index}>
                    <div className = {style.bodyContainer}>
                        <div className = {style.titleContainer}>
                            <div className = {style.titleText}>{entry.title}</div>
                            <button>Edit</button>
                        </div>
                        <div className = {style.dateText}>{dateToString(entry.day)}</div>
                        <div className = {style.contentText}>{entry.content}</div>
                    </div>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}