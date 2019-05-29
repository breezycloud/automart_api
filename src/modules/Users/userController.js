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

        return res.status(200).json({
            status: 200,
            data
        });
    }
    static userSignIn(req, res) {
        const { email } = req.params;
        const data = user.users.find(getU => getU.email == email);        
        if (data) {
          return res.status(200).json({
            status: 200,
            data: data
          });
        } else {
          res.status(404).json({
            status: 404,
            error: "no user found with that email"
          });
        }
      }
}

export default UsersController;