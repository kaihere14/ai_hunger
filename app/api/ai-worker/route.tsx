import { aiQueue } from "@/utils/ai-worker/queue";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const job1 = await aiQueue.add('ai', { slotNumber: 1, message: body.message });
    const job2 = await aiQueue.add('ai', { slotNumber: 2, message: body.message });
    const job3 = await aiQueue.add('ai', { slotNumber: 3, message: body.message });
    const job4 = await aiQueue.add('ai', { slotNumber: 4, message: body.message });
    return NextResponse.json({ message: 'Job added to queue' });
}
