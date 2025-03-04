const modeloProducto=require('../models/productos.models');

exports.buscar =  async (req,res)=>{
    let resultado =  await modeloProducto.find({});
    console.log(resultado)
    if (resultado){
        res.json({"mensaje": resultado});
    }else{
        res.json({"mensaje": "hubo un error"});
    }
};

exports.buscarNombreProducto =  async (req,res)=>{
    let resultado =  await modeloProducto.findOne({"nombre":req.params.ref});
    console.log(resultado)
    if (resultado){
        res.json( resultado);
    }else{
        res.json({"mensaje": "hubo un error"});
    }
}; 

exports.crearProducto = async(req,res)=>{
    const nuevoProducto = {
        "referencia": req.body.referencia,
        "nombre": req.body.nombreProducto,
        "precio": req.body.precioProducto
    };

    let Insercion= await modeloProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje": "registro exitoso"})
    else
        res.status(500).json({"mensaje": "se presento un error"})
};
