import mongoose, { Schema } from "mongoose";

export type Entry = {
    day: Date;
    title: string;
    content: string;
}

export type JournalFormat = {
    name: string;
    userId: string;
    streak: number;
    color: string;
    password: string;
    body: Entry[];
}

const entrySchema = new Schema<Entry>({
    day: { type: Date, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

const journalSchema = new Schema<JournalFormat>({
    name: { type: String, required: true },
    userId: {type: String, required: true, index: true },
    streak: { type: Number, required: true },
    color: { type: String, required: true },
    password: { type: String, required: true },
    body: { type: [entrySchema], required: true }
});

const JournalFormat = mongoose.models['journals'] || mongoose.model('journals', journalSchema);
export default JournalFormat;
