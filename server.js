
import express from "express";
import router from "./router/userRouter.js";


const app = express();

const PORT = 8000;

app.use(express.json());

app.use("/", router)


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Express Server is Running!"
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
