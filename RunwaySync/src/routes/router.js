import { Router } from "express";
import express from "express";
import authRoutes from './auth.routes.js';

const router = Router();

router.use(express.urlencoded({ extended: true }));

// Pantalla de inicio
router.get('/', (req, res) => {
  res.render('index.ejs');
});

// Login GET
router.get('/login', (req, res) => {
  res.render('login.ejs');
});

// Login POST
router.post('/login', (req, res) => {
  res.redirect('/dashboard');
});

// Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard.ejs');
});

// ── RECUPERAR CONTRASEÑA ──
router.use('/', authRoutes);
router.use((req, res, next) => {
  console.log('Ruta solicitada:', req.method, req.url);
  next();
});  // 👈 cambiamos /auth por /
// Calendario
router.get('/calendario', (req, res) => {
  res.render('calendario.ejs');
});

export default router;