const User = require('./userModel')


const addInputData = async (req,res,next)=>{

const {street,city,province,zip,country,email, name,number,month,year,cvv} = req.body

const createUser = new User({
    street,
    city,
    name,
    email,
    country,
    province,
    year,
    cvv, 
    month,
    zip,
    number
})

try{
    await createUser.save()
}catch(err){
    console.log(err)
}

res.status(201).json({user: createUser})

}

exports.addInputData = addInputData