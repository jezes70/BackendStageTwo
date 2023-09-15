import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";

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

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const { MONGODB_URL, MONGODB_OPTIONS } = process.env;

// const db = async (): Promise<void> => {
//   try {
//     await mongoose.connect("MONGODB_URL", {});
//     console.log("MongoDB connected Successfully");
//   } catch (err) {
//     console.error(`MongoDB connection error: ${err}`);
//     process.exit(1);
//   }
// };
// export default db;

// import mongoose, { ConnectOptions } from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/";
// const db = async (): Promise<void> => {
//   try {
//     await mongoose.connect(MONGODB_URI, {});
//     console.log("MongoDB connected Successfully");
//   } catch (err) {
//     console.error(`MongoDB connection error: ${err}`);
//     process.exit(1);
//   }
// };
// export default db;
