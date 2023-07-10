import express from 'express'

//router object
//for routing in separate files we need router object 
const router =express.Router()

//routing
//Register || method POST
router.post('/register',registerController)

export default router;