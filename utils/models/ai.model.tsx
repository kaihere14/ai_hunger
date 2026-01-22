import {Schema,Model,models,model} from "mongoose";

export interface AI {
    name: string;
    slotNumber : number;
    image: string;
    description: string;
    personality: string[];
}

const aiSchema = new Schema<AI>({
    name: String,
    slotNumber: Number,
    image: String,
    description: String,
    personality: [String]
},
{
    timestamps: true
});

const AIModel: Model<AI> = models.AI || model<AI>("AI", aiSchema);

export default AIModel;
