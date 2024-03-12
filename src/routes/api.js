const express = require('express')
const ProfileController = require('../controllers/profileController')
const ToDoListController = require('../controllers/ToDoListController')
const authVerifyMiddleware = require('../middleware/authVerifyMiddleware')
const router = express.Router();

router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UserName',ProfileController.UserLogin)


router.get('/SelectProfile',authVerifyMiddleware,ProfileController.SelectProfile)
router.post('/UpdateProfile',authVerifyMiddleware,ProfileController.UpdateProfile)

router.post('/CreateToDo',authVerifyMiddleware,ToDoListController.CreateToDo)
router.get('/SelectToDo',authVerifyMiddleware,ToDoListController.SelectToDo)

router.post('/UpdateToDo',authVerifyMiddleware,ToDoListController.UpdateToDo)
router.post('/UpdateStatusToDo',authVerifyMiddleware,ToDoListController.UpdateStatusToDo)
router.post('/RemoveToDo',authVerifyMiddleware,ToDoListController.RemoveToDo)
router.post('/SelectToDoByStatus',authVerifyMiddleware,ToDoListController.SelectToDoByStatus)




module.exports=router;