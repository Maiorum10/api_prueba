const mysql = require("mysql");

module.exports = { 
    conexion,
    ver_categorias,
    guardar_categoria,
    actualizar_categoria,
    consultar_productos,
    guardar_producto,
    actualizar_producto
  };

  const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "123",
    database: "prueba"
});

function conexion(){
    db.connect(function (error) {
        if(error){
            console.log("Error de conexión");
        } else{
            console.log("Conexión exitosa")
        }
    });
}

function ver_categorias(req, res){
    this.conexion();

    var sql = `CALL ver_categorias();`;
    db.query(sql, function (error, result) {
      if (error) {
        res.send({ status: false, error });
      } else {
        res.send({ status: true, data: result });
      }
    });
}

function guardar_categoria(req, res){
  this.conexion();

  var sql = `CALL guardar_categoria("${req.body.nombre}", "${req.body.descripcion}", "${req.body.descuento}")`;
  db.query(sql, function (error, result) {
    if (error) {
      res.send({ status: false, error });
    } else {
      res.send({ status: true, data: result });
    }
  });
}

function actualizar_categoria(req, res){
  this.conexion();

  var sql = `CALL actualizar_categoria("${req.params.id}", "${req.body.nombre}", "${req.body.descripcion}", "${req.body.descuento}")`;
  db.query(sql, function (error, result) {
    if (error) {
      res.send({ status: false, error });
    } else {
      res.send({ status: true, data: result });
    }
  });
}

function consultar_productos(req, res){
  this.conexion();

  var sql = `CALL consultar_productos()`;
  db.query(sql, function (error, result) {
    if (error) {
      res.send({ status: false, error });
    } else {
      res.send({ status: true, data: result });
    }
  });
}

function guardar_producto(req, res){
  this.conexion();

  var sql = `CALL guardar_producto(${req.body.id_categoria}, "${req.body.producto}", "${req.body.precio}")`;
  db.query(sql, function (error, result) {
    if (error) {
      res.send({ status: false, error });
    } else {
      res.send({ status: true, data: result });
    }
  });
}

function actualizar_producto(req, res){
  this.conexion();

  var sql = `CALL actualizar_producto(${req.body.id_categoria}, "${req.body.producto}", "${req.body.precio}", ${req.params.id})`;
  db.query(sql, function (error, result) {
    if (error) {
      res.send({ status: false, error });
    } else {
      res.send({ status: true, data: result });
    }
  });
}