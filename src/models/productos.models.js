const mongoose = require("../config/connection");

  // los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
  const schemaProducto = new mongoose.Schema({ 
    referencia:{
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true
    },
    precio: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0.0,
      min: 0.0
    },
  },{versionKey: false});

  const producto = mongoose.model("productos", schemaProducto);
  module.exports = producto;