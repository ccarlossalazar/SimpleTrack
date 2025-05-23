import DataTypes from 'sequelize'
import sequelize from "../configdatabase.js"

const Equipment = sequelize.define('Equipment', {
    id: {
        type: DataTypes.CHAR(8),
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.ENUM('Upright Bike', 'Treadmill', 'Elliptical', 'Recumbent Bike', 'Adaptive Motion Trainer', 'Stair Climber'),
        allowNull: false
    },
    location: {
        type: DataTypes.ENUM('Cardio 1', 'Cardio 2', 'Cardio 3'),
        allowNull: false
    },
    serial_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    equipment_condition: {
        type: DataTypes.ENUM('excellent', 'good', 'fair', 'poor'),
        allowNull: false
    },
    img: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
})
Equipment.associate = (models) => {
    Equipment.hasMany(models.WorkOrder, { foreignKey: 'equipment_id' });
  }

export default Equipment
