var express = require('express');
var app = express();
const axios = require("axios");

app.get('/calculate', async function (req, res) {
    const _exp = req.query.exp
    console.log(_exp);
    if (_exp === undefined || _exp.trim() === '') {
            return res.send({ data: 'undefined'});
    }
    const data = (await axios.get(`http://api.mathjs.org/v4/?expr=${_exp}`)).data;
    res.send({data});
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})