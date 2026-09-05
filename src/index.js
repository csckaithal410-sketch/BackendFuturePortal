import express from "express";
import AuthRoutes from "../Routes/Auth.Routes.js";
import ckParser from "cookie-parser";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDatabase from "../Lib/db.js";
import Upload from "../Models/UploadRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(ckParser());
app.use(
  cors({
    origin: process.env.FRONTENDURI,
    credentials: true,
  }),
);
app.get("/Default_VerifyCertificate.aspx", async (req, res) => {
  const { aid } = req.query;

  if (!aid) {
    return res.status(400).send("Invalid request");
  }

  const fileDoc = await Upload.findOne({ publicId: aid });

  if (!fileDoc) {
    return res.status(404).send("File not found");
  }

  const filePath = path.join(process.cwd(), "uploads", fileDoc.file);

  res.sendFile(filePath);
});
app.use("/api", AuthRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await ConnectDatabase();
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (error) {
    console.log("Database connection failed:", error);
  }
});
