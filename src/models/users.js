class User {   
    users = [];

    createUser(email, firstName, lastName, address, password, isAdmin=false) {
        this.checkIfExists(this.users, email);
        const id = this.getNewId(this.users);
        this.users.push({
            id,
            email,
            firstName,
            lastName,
            address,
            password,
            isAdmin
        });

        const newUser = this.users[id - 1];
        return newUser;    
    }

    getNewId(array) {
        if (array.length > 0) {
            return array[array.length - 1].id + 1
        } else {
            return 1
        }
    }

    checkIfExists(array, email) {
        array.map(obj => {
            console.log(obj);            
            if (obj.email === email) {
                return 'Email already exists'
            }
        })
    }

    getOne(email){
        return this.users.find(u => u.email === email);        
    }
}

export default User;
