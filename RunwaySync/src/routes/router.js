import { Router } from "express";
    const router = Router();
    router.get('/', (request, response) => {
        response.render('index.ejs', {
            message: 'Hello'
        })
        	
        	
    })
    export default router;    
    