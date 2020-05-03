var path = require('path');

module.exports.index = function(req, res){
    res.sendFile(path.join(__dirname, '../../index.html'));
}

module.exports.test = function(req, res){
    res.sendFile(path.join(__dirname, '../../login.html'));
}


