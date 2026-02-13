import User from "../models/User.js";

export const createUser = async (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            error: "name and role are required"
        });
    }

    const newUser = await User.create({ name, role });

    res.status(201).json(newUser);
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { name, role } = req.body;

        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, role },
            { new: true }
        );

        if (!updateUser) {
            return res.status(400).json({ error: "User not found" });
        }

        res.json(updateUser);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);


        if (!deletedUser) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        res.json({
            message: "User deleted"
        });
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
};