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

export default router;
