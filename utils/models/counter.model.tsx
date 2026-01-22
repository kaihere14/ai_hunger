
import { Schema, Model, models, model } from "mongoose";

export interface ICounter {
    name: string;
    count: number;
}

const counterSchema = new Schema<ICounter>({
    name: { type: String, required: true, unique: true },
    count: { type: Number, default: 0 }
});

const CounterModel: Model<ICounter> = models.Counter || model<ICounter>("Counter", counterSchema);

export default CounterModel;
