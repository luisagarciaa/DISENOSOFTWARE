import { Router } from "express";
import express from "express";
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
  // TODO: validar credenciales con base de datos
  res.redirect('/dashboard');
});

// Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard.ejs');
});

export default router;