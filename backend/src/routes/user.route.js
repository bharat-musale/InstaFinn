import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import userAuth from '../middlewares/auth.middleware';

const user_router = express.Router();

//route to get all users
user_router.get('', userController.getAllUsers);

//route to create a new user
user_router.post('', newUserValidator, userController.newUser);

//route to get a single user by their user id
user_router.get('/:_id', userAuth, userController.getUser);

//route to update a single user by their user id
user_router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
user_router.delete('/:_id', userController.deleteUser);

export default user_router;
