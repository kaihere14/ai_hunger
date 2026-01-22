import { connectDB } from "@/utils/db/connectDB";
import AIModel from "@/utils/models/ai.model";
import CounterModel from "@/utils/models/counter.model";

import { NextResponse } from "next/server";



export async function GET() {
    await connectDB();
    const ai = await AIModel.find();
    return NextResponse.json(ai);
}

export async function POST(req: Request) {
    const { name, image, description, personality, slotNumber } = await req.json();
    await connectDB();
    const ai = new AIModel({ name, image, description, personality, slotNumber });
    await ai.save();
    return NextResponse.json({ name, image, description, personality, slotNumber });
}

export async function DELETE(req: Request) {
    try {
        const { slotNumber } = await req.json();
        if (!slotNumber) {
            return NextResponse.json({ error: "Slot number is required" })
        }
        await connectDB();
        await AIModel.deleteOne({ slotNumber });
        await CounterModel.findOneAndUpdate(
            { name: 'totalAiDemolished' },
            { $inc: { count: 1 } },
            { upsert: true }
        );
        return NextResponse.json({ message: "AI deleted successfully" })
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete AI" })
    }

}
