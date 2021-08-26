const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const designSchema = new Schema(
  {
    _creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    tags: {
        type:[]
    },
    imgDesign:{
        type:String,
    },
    title: {
        type:String
    }
  },
  { timestamps: true }
);

module.exports = model("Design", designSchema);