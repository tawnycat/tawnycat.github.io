var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogpostSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  }},

{collection: "BlogPost"}

  );

// This creates our model from the above schema, using mongoose's model method
var BlogPost = mongoose.model("BlogPost", blogpostSchema);

// Export the Article model
module.exports = BlogPost;