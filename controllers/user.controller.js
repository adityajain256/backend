import User from "../modules/user.module.js";

export async function handleHome(req, res) {
    try {
        res.status(200).send("welcome on the home page;")
        
    } catch (error) {
        res.status(500).json({message: "Internal server error at home in controller."});
    }
}

export async function handleRegisterUser(req, res) {
    
    try {
        const body = req.body;

        const users = await User.create(body);
        res.status(201).json({message: "user created successfully"})

    } catch (error) {
        res.status(500).json({message: "Internal server error"});
        console.log(`error in user controller ${error}`)
    }
};

export async function handleLoginUser(req, res) {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email, password});

        if(!user){
            return res.status(404).json({message: "user not found"});
        }

        res.status(200).json({message: "user logged in successfully", user});
        res.redirect('/api/')


    } catch (error) {
        res.status(500).json({message: "Server error"});
        console.log(`error in user controller ${error}`)
    }
};

export async function handleGetUser(req, res) {
    try {
        const allUsers = await User.find();

        res.status(200).json(allUsers);

        req.redirect('/api');

    } catch (error) {
        res.status(500).json({message: "Internal server error at get user in controller."});    
        console.log(`error in user controller ${error}`)
    }
};

export async function handleDeleteUser(req, res) {

    try {
        const {id} = req.params;
        
        await User.findByIdAndDelete(id);

        res.status(204).json({message: "User DELETED successfully."})

    } catch (error) {
        res.status(500).json({message: "Internal server error at delete user in controller."});
        console.log(`error in user controller ${error}`)
    }

};

export async function handleUpdateUser(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        const user = await User.findByIdAndUpdate(id, updates, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error at update user in controller." });
        console.log(`error in user controller ${error}`);
    }
};

