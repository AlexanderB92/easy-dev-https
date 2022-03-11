# Easy-dev-https

Testing selfsigned certificates for node server to use locally.

Generate cert this way:

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365
```

I used openssl included with UBUNTU on WSL. Neat. :astronaut:

!Important 1: Browser will complain about the authority, if it is made up.
!Important 2: Set passphrase in the config 
