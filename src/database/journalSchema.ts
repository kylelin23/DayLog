import mongoose, { Schema } from "mongoose";

type Entry = {
    day: Date;
    content: string;
}

type Journal = {
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

const journalSchema = new Schema<Journal>({
    name: { type: String, required: true },
    streak: { type: Number, required: true },
    color: { type: String, required: true },
    password: { type: String, required: true },
    body: { type: [entrySchema], required: true }
});

const Journal = mongoose.models['journals'] || mongoose.model('journals', journalSchema);

export default Journal;