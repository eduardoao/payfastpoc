module.exports = function(app){
    app.get('/pagamentos', function(req, res) {
        console.log(req.header);
        res.send('OK!');
    });
}



