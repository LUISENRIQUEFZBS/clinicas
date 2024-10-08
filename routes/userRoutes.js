const express = require(`express`);
const router = express.Router();
const userController = require(`../controllers/userController.js`);


router.route(`/`).get(function (req, res) {
    res.send({message:'Hello from server'});
 })

 router.route(`/getDoctores`).get(userController.getDoctores)

module.exports = router;