const nodemailer = require("nodemailer");
const fs = require("fs");

const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "nodemailer.reuse@gmail.com",
        pass: "jguvjyqvjtrkqayi"
    }
});
const readHTML = function (path, callback) {

    fs.readFile(path, {
  
      encoding: "utf-8"
  
    },
  
      function (err, html) {
  
        if (err) {
  
          callback(err);
  
        } else {
  
          callback(null, html);
  
        };
  
      });
  
  };
  
  module.exports = {
  
    mailer,
    readHTML
  
  };