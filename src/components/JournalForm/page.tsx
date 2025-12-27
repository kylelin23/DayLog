"use client"
import style from './journalForm.module.css'

export default function JournalForm (slug: any) {
    const addEntry = async (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        if (!form) {
            console.error("Form not found");
            return;
        }
        const formData = new FormData(form);
        const title = formData.get("title") as string | null;
        const content = formData.get("content") as string | null;

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
        }catch (err) {
            console.error(err);
        }
    }

    return(
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
            className={style.input}
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
    )
}