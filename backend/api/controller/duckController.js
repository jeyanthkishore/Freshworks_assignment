const duckModel = require("../model/duckModel");
const mongoose = require("mongoose");


async function saveDetails(req) {
    duckModel.countDocuments().then((count_documents) => {
        const user = new duckModel({
            Name: req.body.Name,
            Location: req.body.Location,
            Time: req.body.Time,
            Quantity: req.body.Quantity,
            Food: req.body.Food,
            Count: req.body.Count,
        });
        user.save();
        return "success";
    }).catch((err) => {
       return "failure";
  })
}

module.exports.saveDetails = saveDetails;