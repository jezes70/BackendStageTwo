import mongoose, { Document, Schema } from "mongoose";

interface IPerson extends Document {
  name: string;
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
});

const Person = mongoose.model<IPerson>("Person", personSchema);
export default Person;
