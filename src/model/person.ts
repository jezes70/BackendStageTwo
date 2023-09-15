import mongoose, { Document, Schema } from "mongoose";

interface IPerson extends Document {
  name: string;
  // Add more fields here as needed
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
  // Define other fields here
});

const Person = mongoose.model<IPerson>("Person", personSchema);
export default Person;
