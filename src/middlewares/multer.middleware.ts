import multer from "multer";

// export const storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, "/uploads");
//   },
//   filename(req, file, callback) {
//     const fileName = file.originalname;
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     callback(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// // const uploads = multer({ storage });
// const uploads = multer({ storage: storage }).single("avatar");
// export default uploads;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const uploads = multer({ storage: storage }).single("avatar");
