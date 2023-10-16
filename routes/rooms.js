import express from 'express'
import { updateRoom, createRoom, deleteRoom, getRoom, getAllRooms , updateRoomAvailability} from '../controllers/roomController.js'
import {verifyAdmin} from '../utils/verifyToken.js'
const router = express.Router()

//create
router.post('/:hotelid',verifyAdmin ,createRoom)
//update
router.put("/availability/:id", updateRoomAvailability);
router.put('/:id', verifyAdmin, updateRoom)
//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
//get
router.get('/:id', getRoom)
//get all
router.get('/', getAllRooms)
export default router