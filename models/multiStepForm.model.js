const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MultiStepFormSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  occupation: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
  },
});
const MultiStep = mongoose.model("multistep", MultiStepFormSchema);

module.exports = MultiStep;
