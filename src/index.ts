import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import apiRoutes from "./routes/apiRoutes";
import "./config/database";
import { connect } from "./config/database";
import bodyParser from "body-parser";

dotenv.config();

connect().then(() => {
  console.log("MongoDB connected Successfully");
});

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
