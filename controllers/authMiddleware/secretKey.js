const crypto = require('crypto');

const generateSecretKey = ( length = 32 ) => {
    return crypto.randomBytes(length).toString('hex');
}

const secretKey = generateSecretKey();

module.exports = {
    secretKey,
}