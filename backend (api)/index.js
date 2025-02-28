import express from "express"
import dotenv from "dotenv"
import sequelize from "sequelize"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"


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

app.use("/auth", authRoute);
app.use("/users", usersRoute);

app.listen(5000, async () => {
await connect()
console.log("Connected to backend server");
});