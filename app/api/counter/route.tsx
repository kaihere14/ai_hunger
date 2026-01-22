import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db/connectDB";
import CounterModel from "@/utils/models/counter.model";

export async function GET() {
    await connectDB();
    const counter = await CounterModel.findOne({ name: 'totalAiDemolished' });
    return NextResponse.json({ TotalAiDemolished: counter ? counter.count : 0 });
}
