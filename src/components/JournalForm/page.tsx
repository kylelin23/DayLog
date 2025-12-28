"use client"
import { useState } from 'react';
import style from './journalForm.module.css'
import { useRouter } from 'next/navigation';


export default function JournalForm ({ slug }: { slug: string }) {

    const [error, setError] = useState('');
    const router = useRouter();

    const addEntry = async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setError('');
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        if (!form) {
            console.error("Form not found");
            return;
        }
        const formData = new FormData(form);
        const title = formData.get("title") as string | null;
        const content = formData.get("content") as string | null;

        if(!title || !content){
            setError("Make sure to fill out both fields! ");
            return;
        }

        try{
            const res = await fetch(`/api/journals/${slug}/entries`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, content}),
            });
            if(!res.ok){
                const data = await res.json().catch(() => null);
                return;
            }
            const updatedJournal = await res.json();
            router.refresh();
            form.reset();
        }catch (err) {
            console.error(err);
        }
    }

    return(
        <div>
            <form id="contact-form">
                <input
                className={style.input}
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                />
                <br /><br />
                <textarea
                className={style.input2}
                id="content"
                name="content"
                placeholder="Start writing your thoughts here! "
                required
                />
                <br /><br />
                <input
                className={style.submit}
                type="submit"
                value="Submit"
                onClick = {addEntry}
                />
            </form>
            <div className = {style.errorText}>{error}</div>
        </div>
    )
}