const https = require('https');
const fs = require('fs');

var testFile = fs.readFileSync("files/selfsignedkey.pem");

console.log(testFile);

const options = {
    key: fs.readFileSync("files/selfsignedkey.pem"),
    passphrase: "selfsign",
    cert: fs.readFileSync("files/selfsignedcert.pem")
}

const PORT = 5050;

https.createServer(options, (req,res) => {
    res.writeHead(200);
    res.end("https test");
}).listen(5050);

console.log(`Server started on ${PORT}`);