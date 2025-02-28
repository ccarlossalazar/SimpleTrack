import express from "express"
import dotenv from "dotenv"
import sequelize from "sequelize"
const app = express()
dotenv.config()

const connect = async () => {
    try {
    await sequelize.connect(process.env.MYSQL);
    console.log("Connected to MYSQL database")
    } catch (error) {
    throw error
    };
};

sequelize.connection.on("disconnect", () => {
  console.log("Disconnected from MYSQL database")
})

sequelize.connection.on("connected", () => {
    console.log("connected to MYSQL database")
  })

app.listen(5000, () => {
    connect()
  console.log("Connected to backend server");
});