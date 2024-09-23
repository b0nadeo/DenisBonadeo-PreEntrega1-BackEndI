import express from "express";
import router from "./src/routers/index.router.js";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
//creo el server
const server = express();
//defino el puerto en donde va a funcionar mi server
const port = 8000;
//callback que se va a ejecutar cuando se inicie el server
const ready = () => console.log("El server está en el puerto " + port);



//habilita la lectura de datos complejos en la url
server.use(express.urlencoded({extended: true}))
//activo funcionabilidad de json
server.use(express.json())
//obligo a mi servidor a usar morgan: middleware de terceros (registro de solicitudes)
server.use(morgan("dev"))
//middleware: hago que se crucen los origenes de los puertos de back con los de front 
server.use(cors())

//levanto el servidor
server.listen(port, ready);

server.use(router) //hace que mi servidor use las rutas del enrutador
//handlers
server.use(errorHandler)
server.use(pathHandler)//manejar las rutas NO encontradas

