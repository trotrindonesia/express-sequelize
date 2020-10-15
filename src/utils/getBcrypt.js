const bcrypt = require('bcrypt');
const { saltRound } = require('../../config');

const encrypt = (string) => {
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(string, salt);
    return hash;
};


const compare = (string, hash) => {
    const compare = bcrypt.compareSync(string, hash); 
    return compare;
};


module.exports = {
    encrypt,
    compare
};
