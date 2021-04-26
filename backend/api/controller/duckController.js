const duckModel = require("../model/duckModel");
const mongoose = require("mongoose");

async function saveDetails(req) {
    duckModel.countDocuments().then((count_documents) => {
        const user = new duckModel({
            _id: new mongoose.Types.ObjectId(),
            name:req.body.Name,
            location: req.body.Location,
            time: req.body.Time,
            quantity: req.body.Quantity,
            food: req.body.Food,
            count: req.body.Count,
        });
        user.save();
        return user;
  }).catch((err) => {
      console.log(err.Message);
      return err;
  })
}

module.exports.saveDetails = saveDetails;