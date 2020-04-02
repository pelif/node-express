var express = require('express'); 
var router = express.Router(); 

router.use((req, res, next) => {
    console.log("I AM A ROUTER CUSTOM MIDDLEWARE"); 
    next();
}); 

router.get('/', (req, res, next) => {    
    next(new Error('custom error')); 
    // res.json({
    //     message: 'hello world'
    // })
}); 

router.get('/params/:name', (req, res) => {
    res.json({
        params: req.params, 
        host: req.host, 
        header: req.headers
    })
}); 

router.post('/body', (req, res) => {
    res.status(201).json(req.body); 
}); 

module.exports = router; 