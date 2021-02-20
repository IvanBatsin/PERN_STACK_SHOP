import { v4 } from 'uuid';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../static'));
  },
  filename(req, file, cb) {
    const extension = path.extname(file.originalname);
    cb(null, v4() + extension);
  }
});

export const upload = multer({storage});