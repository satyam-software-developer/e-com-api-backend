// 1. Import multer.
import multer from 'multer';

// 2. Configure storage with filename and location.
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//     cb(null, './uploads/');
//     },
//     filename:(req, file, cb)=>{
//     cb(null, new Date().toISOString() + file.originalname);
//     },
//     });

// 2. Configure storage with filename and location for windows user
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        // Generate a filename using the current date and time
        const date = new Date().toISOString().replace(/:/g, '_');
        const filename = date + file.originalname;
        cb(null, filename);
    }
});

export const upload = multer({
    storage: storage,
});
