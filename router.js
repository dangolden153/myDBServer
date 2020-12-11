const express = require('express');
const router = express.Router();

const users = [
    {
        email: 'abc@gmail.com',
        password: 'password'
    }
]

router.get('/', (req,res) =>{
    res.send('the server is up and runing')
});


router.post('/login', (req, res) =>{
    let result = users.find(user => user.email === req.body.email);

    if(result) {
        if(result.password === req.body.password) {
            res.status(200).send({
                message:"sucessful login!!"
            })
        } else {
            res.status(200).send({
                message:"password incorrect!!"
            })
        }


    } else {
            res.status(200).send({
                message:"user not found!!"
            })
    }
    
});
module.exports = router;