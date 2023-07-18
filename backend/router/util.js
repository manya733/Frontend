const multer = require('multer');
const router = require('express').Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });
router.post("/uploadfile", upload.single("myfile"), (req, res) =>
 {
  res.status(200).json({ status: "success" });

});
module.exports = router;