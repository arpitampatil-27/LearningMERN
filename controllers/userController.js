let users = [];
let currentId = 1;

export const createUser = (req, res) => {
    const {name,role} = req.body;

    if(!name || !role) {
        return res.status(400).json({
            error: "name and role are required"
        });
    }

    const newUser = {
        id: currentId++,
        name,
        role
    };

    users.push(newUser);

    res.status(201).json({
        message: "user received",
        user: newUser
    });
};

export const getUsers = (req, res) => {
    res.json(users);
};

export const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if(!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }
    res.json(user);
};

export const updateUser = (req,res) => {
    const id = parseInt(req.params.id);
    const { name, role } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    if (!name || !role) {
        return res.status(400).json({
            error: "name and role are required"
        });
    }

    user.name = name;
    user.role = role;

    res.json({
        message: "User updated",
        user
    });
};

export const deleteUser = (req,res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted"
    });
};