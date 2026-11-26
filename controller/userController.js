
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

