const userService = require('../services/user.service')

const create = async (req, res) => {
    try {
        const {name, username, email, password, avatar, background} = 
        req.body;
        
        if(!name || !username || !email || !password || !avatar || !background) {
            res.status(400).send({ message:"Information not filled in the input field" })
        } 
        
        const user = await userService.createService(req.body);

        if (!user) {
            return res.status(400).send({ message: "Error creating User"})
        }

        res.status(201).send({
            message: "User created successfully",
            user: {
                id: user._id,
                name,
                username,
                email,
                avatar,
                background,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
}

const findAll = async(req, res) => {
    try {
        const users = await userService.findAllService();

        if(users.length === 0) {
            return res.status(400).send({ message: "There are no registered users"});
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message})
    }

} 

const findById = async(req, res) => {
    try {
        const user = req.user
        res.send(user)
    } catch(error) {
        res.status(500).send({ message: err.message})
    }
} 

const update = async(req, res) => {
    try {
        const {name, username, email, password, avatar, background} = req.body;
    
        if(!name && !username && !email && !password && !avatar && !background) {
            res.status(400).send({ message:"submit at least one field for update" })
        }

        const {id, user} = req;

        await userService.updateService(
            id,
            name,
            username,
            email,
            avatar,
            background
        )

        res.send({ message: "User successfully updated"})
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
} 

const deleteUser = async (req, res) => {
    try {
        const {id} = req;
        await userService.deleteService(id);
        res.status(200).send({ message: "User successfully deleted"});
    } catch (err) {
        res.status(500).send({ message: err.message})
    }
};
module.exports = {create, findAll, findById, update, deleteUser}