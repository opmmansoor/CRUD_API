
import fs from "fs/promises";

// Create User (POST)
export const createUser = async (req, res) => {
    try {
        const data = await fs.readFile("./db.json", "utf-8");

        const db = JSON.parse(data);

        db.users.push({
            id: Date.now(),
            ...req.body
        });

        await fs.writeFile("./db.json", JSON.stringify(db, null, 2));

        res.status(201).json({
            message: "User added successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get User (GET)
export const getUsers = async (req, res) => {
    try {
        const data = await fs.readFile("./db.json", "utf-8");
        const db = JSON.parse(data);

        res.status(200).json(db.users);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete Users
export const deleteUser = async (req, res) => {
    try {
        const data = await fs.readFile("./db.json", "utf-8");
        const db = JSON.parse(data);

        const id = Number(req.params.id);

        const user = db.users.find((user) => user.id === id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        db.users = db.users.filter((user) => user.id !== id);

        await fs.writeFile("./db.json", JSON.stringify(db, null, 2));

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


