import User from "../models/User.js"


export const updateUser = async function(req,res,next){

    try{
        const updateUser = await User.findByIdAndUpdate(req.params.body)
        res.status(200).json(updateUser)
    }catch(err){
        next(err)
    }
}
export const deleteUser = async function(req,res,next){

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('deleted')
    } catch (err) {
        res.status(500).json(err)
    }
}
export const getUser = async function(req,res,next){

    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
export const getAllUsers = async function(req,res,next){

    try {
        const users = await User.find(req.params.body)
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}