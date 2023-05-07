// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const User = require("../models/photo.model");

// const s3 = new aws.S3({
//   accessKeyId: process.env.S3_ACCESS_KEY,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: process.env.S3_BUCKET,
// });

// const upload = (bucketName) =>
//   multer({
//     storage: multerS3({
//       s3,
//       bucket: bucketName,
//       metadata: function (req, file, cb) {
//         cb(null, { fieldName: file.fieldname });
//       },
//       key: function (req, file, cb) {
//         cb(null, `image-${Date.now()}.jpeg`);
//       },
//     }),
//   });

// exports.setProfilePic = (req, res, next) => {
//   const uploadSingle = upload("profile-picture-mern").single(
//     "profilepic"
//   );
//   const user_id = req.params.id;

//   uploadSingle(req, res, async (err) => {
//     if (err)
//       return res.status(400).json({ success: false, message: err.message });

//     await User.create({ user_id:user_id, photoUrl: req.file.location });

//     res.status(200).json({ data: req.file.location });
//   });
// };


const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.S3_ACCESS_KEY,
    region: "ap-southeast-1",
});

const upload =   multer({
    storage: multerS3({
      s3: s3,
      bucket: "profile-pic-mern",
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        cb(null, `image-${Date.now()}.jpeg`);
      },
    }),
  });

module.exports = upload;