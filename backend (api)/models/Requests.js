import { DataTypes, Sequelize } from 'sequelize'
import sequelize from '../configdatabase.js'

const Requests = sequelize.define('Requests', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.ENUM('rejected', 'approved', 'in progress', 'requested', 'completed'),
    allowNull: false,
    defaultValue: "requested"
  },
  description: {
    type: DataTypes.TEXT,
  },
  location: {
    type: DataTypes.ENUM('Cardio 1', 'Cardio 2', 'Cardio 3'),
    allowNull: false
},
name: {
    type: DataTypes.ENUM('Upright Bike', 'Treadmill','Elliptical','Recumbent Bike','Adaptive Motion Trainer','Stair Climber'),
    allowNull: false
},
date_requested: {
    type: Sequelize.DATEONLY, 
    default: Sequelize.NOW
},
firstname: {
    type: DataTypes.STRING(50),
    allowNull: false
},
lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
},
email: {
    type: DataTypes.STRING(50),
    allowNull: false,
},
}, {
    tableName: 'requests',
    timestamps: false
  });

export default Requests