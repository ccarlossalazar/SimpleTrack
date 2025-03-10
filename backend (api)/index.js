import express from "express"
import dotenv from "dotenv"
import sequelize from "sequelize"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import equipmentRoute from "./routes/equipment.js"
import maintenanceRoute from "./routes/maintenance.js"
import reportsRoute from "./routes/reports.js"
import workordersRoute from "./routes/workorders.js"


const app = express()
dotenv.config()

const sequelizee = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
});

const connect = async () => {
    try {
    await sequelizee.authenticate(); 
    console.log("Connected to MYSQL database");
    } catch (error) {
    console.error("Database connection error:", error);
}
};

//middlewares
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/equipment", authRoute);
app.use("/maintenance", usersRoute);
app.use("/reports", authRoute);
app.use("/workorders", usersRoute);

app.listen(5000, async () => {
await connect()
console.log("Connected to backend server");
});