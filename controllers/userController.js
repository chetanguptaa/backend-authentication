const getLogin = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 200;
    res.send('Login Page');
}

const getRegistration = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 200;
    res.send('Registration Page');
}

const getHome = async (req, res) => {
    res.send('Home Page');
}
module.exports = {
    getLogin,
    getRegistration,
    getHome
};