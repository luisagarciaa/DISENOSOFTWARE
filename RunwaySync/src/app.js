import express from 'express';
import { join } from "path";
import mongoose from 'mongoose';
import session from 'express-session';

import appRouter from "./routes/router.js";

const app = express();
const port = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/runwaysync')
  .then(() => console.log('MongoDB conectado ✅'))
  .catch((err) => console.error('Error MongoDB:', err));

// Configuración de la app
app.set("view engine", 'ejs');
app.set("views", "views");
app.use(express.static(join("./public")));

// Sesión
app.use(session({
  secret: 'runwaysync_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Rutas
app.use("/", appRouter);

app.listen(port, () => {
  console.log(`Server running 🚀 at http://localhost:${port}`);
});
