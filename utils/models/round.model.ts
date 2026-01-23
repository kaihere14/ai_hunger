import { Schema, Model, models, model } from "mongoose";

export interface IRound {
    query: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    answers: {
        slotNumber: number;
        response: string;
        aiName?: string;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const roundSchema = new Schema<IRound>({
    query: { type: String, required: true },
    status: { type: String, default: 'pending', enum: ['pending', 'processing', 'completed', 'failed'] },
    answers: [{
        slotNumber: Number,
        response: String,
        aiName: String
    }]
}, {
    timestamps: true
});

const RoundModel: Model<IRound> = models.Round || model<IRound>("Round", roundSchema);
export default RoundModel;
