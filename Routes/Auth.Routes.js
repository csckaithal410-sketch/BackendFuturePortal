import express from "express";
import {
  Login,
  Logout,
  Me,
  DeleteUploadedFiles,
  Register,
  AllUploadedFiles,
  UploadFile,
  AllUsers,
  UploadedPdf,
  DeletePDf,
  DeleteUsers,
  ActivateUser,
  DeactivateUser,
} from "../Controllers/AuthController.js";
import { AuthToken } from "../Middlewares/AuthTokken.js";
import { upload } from "../Middlewares/Multer.js";
import { adminOnly } from "../Middlewares/Admin.js";

const router = express.Router();

router.post("/auth/login", Login);
router.post("/auth/logout", Logout);
router.post("/auth/register", Register);
router.get("/auth/user", AuthToken, Me);

// uploads routes
router.post("/auth/uploads", AuthToken, upload.single("file"), UploadFile);
router.get("/auth/AllFiles", AuthToken, AllUploadedFiles);
router.post("/auth/DeleteUploadedFiles/:id", AuthToken, DeleteUploadedFiles);

//admin routes

router.get("/auth/allusers", AuthToken, adminOnly, AllUsers);
router.get("/auth/allpdf", AuthToken, adminOnly, UploadedPdf);
router.post("/auth/deletePdf/:id", AuthToken, adminOnly, DeletePDf);
router.post("/auth/DeleteUsers/:id", AuthToken, adminOnly, DeleteUsers);
router.post("/auth/ActivateUser/:id", AuthToken, adminOnly, ActivateUser);
router.post("/auth/Deactivateuser/:id", AuthToken, adminOnly, DeactivateUser);
export default router;
