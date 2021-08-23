const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type:String,
      required: [true, "Debes mandar un email"],
    },
    username: {
      type: String,
      required: [true, "Debes mandar un Nombre de usuario"],
    },
    password: {
        type: String,
        required: [true, "Debes agregar que un contraseña"],
    },
    image:{
        type:String,
    },
    role: {
      type:String,
      enum:["Admin","User","Creator"]
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);