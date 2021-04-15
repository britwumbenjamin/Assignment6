const express = require('express')

const users = require('./users')

const router = express.Router();


router.post('/login', function(request, response){
    console.log(request.body);
    const {username,password} = request.body
    let user = users.filter((data)=> data.username === username)

    if (user.length == 1)
    { if (user[0].password == password){
        response.send({message:'Login successful'}) 
    }
        response.send({message:'username or password is wrong'})
}
else{
    response.send({message:'login failed'})
}
})


router.post('/', function(request, response){
    const {username,password,confirm_password} = request.body

    if (password === confirm_password ) {
        response.send({message:'sign up successful'}) 
    } else
    {
        response.send({message:'passwords do not match'})
}
})

module.exports = router;