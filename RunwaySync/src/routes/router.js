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

// ── RECUPERAR CONTRASEÑA ──

router.get('/recuperar', (req, res) => {
  res.render('recuperar.ejs');
});

router.post('/recuperar', (req, res) => {
  res.redirect('/verificar-codigo');
});

router.get('/verificar-codigo', (req, res) => {
  res.render('verificar-codigo.ejs');
});

router.post('/verificar-codigo', (req, res) => {
  res.redirect('/nueva-contrasena');
});

router.get('/nueva-contrasena', (req, res) => {
  res.render('nueva-contrasena.ejs');
});

router.post('/nueva-contrasena', (req, res) => {
  res.redirect('/confirmacion');
});

router.get('/confirmacion', (req, res) => {
  res.render('confirmacion.ejs');
});

export default router;