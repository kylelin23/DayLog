import connectDB from '@/src/database/db';
import style from './journalPage.module.css'
import JournalFormat from '@/src/database/journalSchema';

export default async function JournalPage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    await connectDB();

    const journal = await JournalFormat.findOne({ _id : slug });

    if (!journal) return <div>Journal not found</div>;


    return(
        <div>{journal.name}</div>
    )
}