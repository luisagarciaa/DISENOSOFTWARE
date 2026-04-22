import { Router } from "express";
import express from "express";
const router = Router();

router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index.ejs');
});

router.get('/login', (req, res) => {
  res.render('login.ejs');
});

router.post('/login', (req, res) => {
  // TODO: validar credenciales con base de datos
  res.redirect('/dashboard');
});

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.post('/register', (req, res) => {
  // TODO: guardar usuario en base de datos
  res.redirect('/login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard.ejs');
});

<<<<<<< HEAD
// ── RECUPERAR CONTRASEÑA ──

// Paso 1: Formulario correo
router.get('/recuperar', (req, res) => {
  res.render('recuperar.ejs');
});

// Paso 1 POST: recibe correo y redirige a verificar código
router.post('/recuperar', (req, res) => {
  // TODO: enviar código real al correo con nodemailer
  res.redirect('/verificar-codigo');
});

// Paso 2: Formulario código
router.get('/verificar-codigo', (req, res) => {
  res.render('verificar-codigo.ejs');
});

// Paso 2 POST: valida código y redirige a nueva contraseña
router.post('/verificar-codigo', (req, res) => {
  // TODO: validar código real
  res.redirect('/nueva-contrasena');
});

// Paso 3: Formulario nueva contraseña
router.get('/nueva-contrasena', (req, res) => {
  res.render('nueva-contrasena.ejs');
});

// Paso 3 POST: guarda nueva contraseña y redirige a confirmación
router.post('/nueva-contrasena', (req, res) => {
  // TODO: actualizar contraseña en base de datos
  res.redirect('/confirmacion');
});

// Paso 4: Confirmación
router.get('/confirmacion', (req, res) => {
  res.render('confirmacion.ejs');
});

=======
>>>>>>> 010dfd4b8f05ba47e1c2f5a1aad098a5850309fd
export default router;
