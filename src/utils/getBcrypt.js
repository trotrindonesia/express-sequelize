const bcrypt = require('bcrypt');

const encrypt = (string, keyRounds) => {
    const salt = bcrypt.genSaltSync(keyRounds);
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
