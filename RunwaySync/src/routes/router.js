import { Router } from "express";
const router = Router();

router.get('/', (request, response) => {
    response.render('index.ejs');
});

router.get('/register', (request, response) => {
    response.render('register.ejs');
});

router.get('/login', (request, response) => {
    response.render('login.ejs');
});

export default router;
