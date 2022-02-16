var express = require('express');
var app = express();
const axios = require("axios");

app.get('/', async function (req, res) {
    const _exp = req.query.exp;
    try {
        if (_exp === undefined || _exp.trim() === '') {
            return res.send({data: 'undefined'});
        }
        const data = (await axios.get(`http://api.mathjs.org/v4/?expr=${_exp}`)).data;
        res.send({data});
    } catch (e) {
        res.send({data: 'Invalid Input'});
    }
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})