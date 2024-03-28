// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "durchzrqq",
  api_key: "252433146372919",
  api_secret: "B1Cwq_BFdBS2Y5SA_q3rERrjzPM",
  secure: true,
});

module.exports = cloudinary;
