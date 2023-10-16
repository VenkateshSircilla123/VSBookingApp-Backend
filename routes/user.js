import express from 'express'
import {   deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js'
import { verifyToken, verifyUser,verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// router.get('/checkauthentication' , verifyToken , (req,res,next)=>{
//     res.send("hello user, u r logged in")
// })
// router.get('/checkuser/:id' , verifyUser , (req,res,next)=>{
//     res.send("hello user, u r logged in and ypu can delete your account")
// })
// router.get('/checkadmin/:id' , verifyAdmin , (req,res,next)=>{
//     res.send("hello admin, u r logged in and you can delete all accounts")
// })

//update
router.put('/:id', verifyUser, updateUser)
//delete
router.delete('/:id',verifyUser , deleteUser)
//get
router.get('/:id', verifyUser, getUser)
//get all
router.get('/', verifyAdmin, getAllUsers)

export default router
