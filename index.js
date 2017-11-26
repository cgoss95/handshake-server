const express = require('express');
const qrCode = require('qrcode-npm');

const app = express()

app.get('/', (req, res) => {
  var qr = qrCode.qrcode(4, 'M');
  qr.addData("hello");
  qr.make();
  res.writeHeader(200, {"Content-Type": "text/html"});  
  
  let img = qr.createImgTag(4)
  let reg = /"([^"]*)"/g;
  let result = img.match(reg)[0];
  
  res.end(result);    // creates an <img> tag as text
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))