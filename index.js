const express = require('express');
const qrCode = require('qrcode-npm');

const app = express();

app.set('port', 3000 || process.env.PORT );

app.get('/', (req, res) => {
  var qr = qrCode.qrcode(4, 'M');
  qr.addData("hello");
  qr.make();
  res.writeHeader(200, {"Content-Type": "text/html"});  
  console.log('broken');
  let img = qr.createImgTag(4)
  let reg = /"([^"]*)"/g;
  let result = img.match(reg)[0];
  res.end(result);    // creates an <img> tag as text
});

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    var qr = qrCode.qrcode(4, 'M');
    qr.addData("hello");
    qr.make();
    res.writeHeader(200, {"Content-Type": "text/html"});  
    console.log('broken');
    let img = qr.createImgTag(4)
    let reg = /"([^"]*)"/g;
    let result = img.match(reg)[0];
    res.end(result);
  } else {
    res.end('');
  }
  
});


app.listen(app.get('port'), () => console.log('Example app listening on port!'))