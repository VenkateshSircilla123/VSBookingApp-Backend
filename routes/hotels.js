import express from 'express'
import Hotel from '../models/Hotel.js'
import {verifyAdmin, verifyUser, } from '../utils/verifyToken.js'
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, countByCity , countByType, getHotelRooms, getFeaturedHotels} from '../controllers/hotelController.js'
const router = express.Router()

//create
router.post('/',verifyAdmin ,createHotel)
//update
router.put('/:id', verifyAdmin, updateHotel)
//delete
router.delete('/:id', verifyAdmin, deleteHotel)
//get
router.get('/find/:id', getHotel)
//get all
router.get('/', getAllHotels)
router.get('/featured', getFeaturedHotels)

router.get('/countByType', countByType)
router.get('/countByCity', countByCity)
router.get('/room/:id', getHotelRooms)
export default router