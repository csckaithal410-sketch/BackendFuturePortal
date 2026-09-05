import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // .pdf
    const name = path.basename(file.originalname, ext); // remove .pdf

    cb(null, name + ext); // store original file with extension
  },
});

export const upload = multer({ storage });
