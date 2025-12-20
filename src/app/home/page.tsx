import style from "./home.module.css";
import Journal from '../../components/Journal/Journal'
import connectDB from "@/src/database/db";
import JournalFormat from "@/src/database/journalSchema";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

async function getJournals(userId: string | null) {
  await connectDB();
  try {
    const journals = await JournalFormat.find({ userId }).orFail();
    return journals;
  } catch (err){
    return null;
  }
}

export default async function Home () {
  const { userId } = await auth();

  const journals = await getJournals(userId) || [];

  return(
    <div className = {style.outerContainer}>
      <div className = {style.titleText}>Dashboard</div>
      <div className = {style.container}>
        {journals.map(((journal) =>
          <Link
            key = {journal._id}
            href = {`/home/${journal._id}`}>
            <Journal
              name = {journal.name}
              userId = {journal.user_id}
              streak = {journal.streak}
              password = {journal.password}
              color = {journal.color}
              body = {journal.body}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}