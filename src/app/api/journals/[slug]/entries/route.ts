// Make Entry POST Endpoint

import connectDB from "@/src/database/db";
import { NextRequest, NextResponse } from "next/server";
import JournalFormat from '../../../../../database/journalSchema';
import Entry from '../../../../../database/journalSchema';

export async function POST (req: NextRequest, { params }: { params: Promise<{slug:string}>}) {
    try {
        const { slug } = await params;
        const body = await req.json();
        const { title, content } = body;
        if (!title || !content || typeof title != "string" || typeof content != "string"){
            return NextResponse.json(
                { error: "Invalid body"},
                { status: 400 }
            );
        }
        await connectDB();
        const newEntry = await Entry.create({
            day: new Date(),
            title,
            content,
        });

        const updatedJournal = await JournalFormat.findOneAndUpdate(
            { slug: slug},
            { $push: {body: newEntry}},
            { new: true }
        );


        return NextResponse.json(
            { message: "Entry successfully added" },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500}
        );
    }
}