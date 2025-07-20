import multer from "multer";

const storage = multer.memoryStorage(); // Vercel-compatible

export const upload = multer({ storage });
