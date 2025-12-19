import mongoose, { Schema } from "mongoose";

type Entry = {
    day: Date;
    content: string;
}

export type JournalFormat = {
    name: string;
    streak: number;
    color: string;
    password: string;
    body: Entry[];
}

const entrySchema = new Schema<Entry>({
    day: { type: Date, required: true },
    content: { type: String, required: true }
});

const journalSchema = new Schema<JournalFormat>({
    name: { type: String, required: true },
    streak: { type: Number, required: true },
    color: { type: String, required: true },
    password: { type: String, required: true },
    body: { type: [entrySchema], required: true }
});

const JournalFormat = mongoose.models['journals'] || mongoose.model('journals', journalSchema);
export default JournalFormat;
