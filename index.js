const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const api_prueba = require("./api_prueba/config.js");

//app.use(cors({ origin: "*" }));
const app = express();
app.use(bodyParser.json()); 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
var port = process.env.PORT || process.env.port || 1025;

app.listen(port, () => {
  console.log(`The server started on port ${port}`);
});

/*---------- API_PRUEBA ----------*/

app.get("/api_prueba/ver_categorias", (req, res) => {
  api_prueba.ver_categorias(req, res);
});

app.get("/api_prueba/consultar_productos", (req, res) => {
  api_prueba.consultar_productos(req, res);
});

app.post("/api_prueba/guardar_categoria", (req, res) => {
  api_prueba.guardar_categoria(req, res);
});

app.post("/api_prueba/guardar_producto", (req, res) => {
  api_prueba.guardar_producto(req, res);
});

app.put("/api_prueba/actualizar_categoria/:id", (req, res) => {
  api_prueba.actualizar_categoria(req, res);
});

app.put("/api_prueba/actualizar_producto/:id", (req, res) => {
  api_prueba.actualizar_producto(req, res);
});