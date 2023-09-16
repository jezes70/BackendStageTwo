import mongoose from "mongoose";
const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://sabiflexhq:sabi123flex@cluster0.urqsyic.mongodb.net/sabiflexdb";

export const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
  } catch (err) {
    console.log(err);
  }
};
