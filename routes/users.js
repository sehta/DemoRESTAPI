var express = require('express');
var router = express.Router();     
router.route('/').get(function(req, res) {
    res.send("Hello ALL USERS");
});



router.route('/login').post(function(req, res) {
console.log(req)
console.log(req.params.id)
    if(!req.body.username || !req.body.password) {
        return res.send({"status": "put user", "message": "missing a parameter"});
    } else {
        return res.send({"status": "Success", "message": "Get required attributes"});
    }
});




module.exports = router;


