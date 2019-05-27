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

        const data = user.createUser(email,firstName, lastName, address, password);

        return res.status(201).json({
            status: 'User sucessfully created',
            data
        });
    }
}

export default UsersController;