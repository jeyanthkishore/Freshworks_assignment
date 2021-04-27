const express = require("express");
const { saveDetails } = require("../controller/duckController");
const router = express.Router();
const duckModel = require("../model/duckModel");

//Save the details
router.post("/save", (req, res) => {
    const response = saveDetails(req);
    res.status(200).json(response)
});

//Fetch all the details
router.get("/alldata", (req, res) => {
  try {
    duckModel
    .find({}, {_id: 0 })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    } catch (err) {
        console.log(error);
    }
});
module.exports = router;