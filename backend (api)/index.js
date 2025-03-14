import express from "express"
import dotenv from "dotenv"
import sequelize from "./configdatabase.js"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import equipmentRoute from "./routes/equipment.js"
import maintenanceRoute from "./routes/maintenance.js"
import reportsRoute from "./routes/reports.js"
import workordersRoute from "./routes/workorders.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
const connect = async () => {
    try {
    await sequelize.authenticate(); 
    console.log("Connected to MYSQL database");
    } catch (error) {
    console.error("Database connection error:", error);
}
};


//middlewares
app.use(cookieParser())

app.use(express.json())
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/equipment", equipmentRoute);
app.use("/maintenance", maintenanceRoute);
app.use("/reports", reportsRoute);
app.use("/workorders", workordersRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(5000, async () => {
await connect()
console.log("Connected to backend server");
});