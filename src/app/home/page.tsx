import style from "./home.module.css";
import Journal from '../../components/Journal/Journal'
import connectDB from "@/src/database/db";
import JournalFormat from "@/src/database/journalSchema";
import Link from "next/link";

async function getJournals() {
  await connectDB();
  try {
    const journals = await JournalFormat.find().orFail();
    return journals;
  } catch (err){
    return null;
  }
}

export default async function Home () {

  const journals = await getJournals() || [];

  return(
    <div className = {style.container}>
      {journals.map(((journal) =>
        <Link
          key = {journal._id}
          href = {`/home/${journal._id}`}>
          <Journal
            name = {journal.name}
            streak = {journal.streak}
            password = {journal.password}
            color = {journal.color}
            body = {journal.body}
          />
        </Link>
      ))}
    </div>
  );
}