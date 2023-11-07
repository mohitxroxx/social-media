const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')

module.exports = {
    hash: async function (val) {
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(val, salt);
        return hashedpass;
    },

    comp: async function (user, pass) {
        const chk = await bcrypt.compare(user, pass);
        return chk;
    },

    jwt: function (id) {
        return JWT.sign({ userId: id }, process.env.JWT_SKEY, {
            expiresIn: "1d"
        });
    }
};
