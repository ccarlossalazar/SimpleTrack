import express from "express"
import dotenv from "dotenv"
import sequelize from "sequelize"
const app = express()

app.listen(5000, () => {
  console.log("Connected to backend server")
})