import mongoose, { Document, Schema, Model } from "mongoose";

interface IPerson extends Document {
  name: string;
}

const personSchema = new Schema<IPerson>({
  name: { type: String, required: true },
});

// Define a static method to find a person by name
personSchema.statics.findByName = async function (
  name: string
): Promise<IPerson | null> {
  return this.findOne({ name }).exec();
};

const Person: Model<IPerson> = mongoose.model<IPerson>("Person", personSchema);

export default Person;
