import User from '../../models/users';

const user = new User();

class UsersController{
    static createUser(req, res) {
        const { 
            body: { 
                email, 
                firstName,
                lastName, 
                address, 
                password 
            } 
        } = req;

        const userDetails = user.createUser(email,firstName, lastName, address, password);

        return res.status(201).json({
            status: 'User sucessfully created',
            userDetails
        });
    }
}

export default UsersController;