const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    
    username: {
      type: String,
      required: [true, "Debes mandar un Nombre de usuario"],
    },
    campus: {
        type: String,
        enum: ["Madrid", "Barcelona", "Miami", "Paris", "Berlin", "Amsterdam", "México", "Sao Paulo", "Lisbon"]
      },
    password: {
        type: String,
        required: [true, "Debes agregar que un contraseña"],
    },
    image:{
        type:String,
    },
    course: {
      type:String,
      enum: ["Web Dev", "UX/UI", "Data Analytics"]
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);