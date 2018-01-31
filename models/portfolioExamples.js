var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var portfolioExampleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  photo: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  githubLink: {
    type: String,
    required: true
  },

  liveLink: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var portfolioExamples = mongoose.model("portfolioExamples", portfolioExampleSchema);

// Export the Article model
module.exports = portfolioExamples;