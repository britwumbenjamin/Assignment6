const express = require('express')

const users = require('./users')

const router = express.Router();

const usermodel = require('./usermodel')


router.post('/login', async function(request, response){
    const {username,password} = request.body
    
    let responseData = await usermodel.findOne({username})
    console.log(responseData)

    if(responseData){

        if (password === responseData.passwor){
            response.status(200).send({message:'login successful'})
        }
        else{
            response.status(200).send({message:'wrong username or password'})
        } 
    }
    else {
        response.status(400).send({message:'user does not exist'})
    }
    
})


router.post('/signup', async function(request, response){
    const {username,password,email,confirm_password} = request.body

    let userModel = new usermodel({username,password,email,confirm_password})
    let responseData = await userModel.save()

    if(responseData){
    response.status(200).send({message:'signup succussful'})}
    else{
        response.status(400).status({message:'error occured', data: responseData})
    }
})

module.exports = router;