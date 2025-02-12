const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '../../', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf-8');

const generateHash = (password) =>{
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: hash
    };
};

const checkPassword = (password, hash, salt) =>{
    const hashOfTypedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hashOfTypedPassword === hash;
};

const generateJWT = (user) => {
    const payload = {
        sub: user.id,
        email: user.email
    }

    return jsonwebtoken.sign(payload, PRIV_KEY, {expiresIn: '7d', algorithm: 'RS256'});
};

const getToken = (req) => {
    const header = req.get('Authorization');
    return header.split(' ')[1];
  }

const user = (token) => {
    const payload = token.split(".")[1];
    const encodedPayload = Buffer.from(payload, 'base64');
    const decodedPayload = encodedPayload.toString('utf-8');
    return JSON.parse(decodedPayload);
    
}

module.exports = {
	checkPassword,
	generateHash,
	generateJWT,
	user,
	getToken
}