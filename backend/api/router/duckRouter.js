//The author of this file is Jeyanth Kishore Ramasamy(B00875285)
const express = require("express");
const { saveDetails } = require("../controller/duckController");
const router = express.Router();

//Register the user
router.post("/save", (req, res) => {
    loginModel
        .find({ email: req.body.email })
        .exec()
        .then((data) => {
            if (!data.length) {
                const response = saveDetails(req);
                res.status(200).json(response)
            } else {
                res.status(407).json({
                    success: false,
                    message: "Username already exists",
                });
            }
        });
});

module.exports = router;