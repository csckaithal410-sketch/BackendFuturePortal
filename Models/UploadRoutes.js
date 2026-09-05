import mongoose from "mongoose";
import { type } from "os";

const UploadSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
    },
    uploaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    file: {
      type: String,
    },
    qrCode: {
      type: String,
    },
    tid: {
      type: String,
    },
    cid: { type: String },
  },
  { timestamps: true },
);

const Upload = mongoose.model("Uploads", UploadSchema);

export default Upload;
