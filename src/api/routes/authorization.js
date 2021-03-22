const router = require("express").Router();
const { registrationController } = require("../controllers/UsersControllers");

router.post("/registration", registrationController);

// router.get('/login', (req, res) => {
// });

module.exports = router;
