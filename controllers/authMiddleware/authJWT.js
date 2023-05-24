const jwt = require('jsonwebtoken');
const { secretKey } = require('./secretKey');

const auth = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
        return res.status(403).json({
            error: 'missing auth header'
        })
    }
    const decoded = jwt.verify(authHeader, secretKey);
    if(decoded && decoded.id) {
        req.userId = decoded.id;
        next();
    } else {
        return res.status(403).json({
            error: 'incorrect token'
        })
    }
}

module.exports = {
    auth
}