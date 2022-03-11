const https = require('https');
const fs = require('fs');

//Put in env as usual
const certPath = "files/selfsignedcert.pem";
const keyPath = "files/selfsignedkey.pem";
const passphrase = "selfsign";
const PORT = 5050;

//Config
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
    passphrase: passphrase
}

https.createServer(options, (req,res) => {
    res.writeHead(200);
    res.end("https test");
}).listen(PORT);

console.log(`Server started on ${PORT}`);