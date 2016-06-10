var express = require('express');
var router = express.Router();     
router.route('/account').get(function(req, res) {
    res.send("Hello ALL account");
});



router.route('/account/:id').put(function(req, res) {
console.log(req)
console.log(req.params.id)
    if(!req.body.username || !req.body.password || !req.body.name) {
        return res.send({"status": "put user", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});




module.exports = router;


