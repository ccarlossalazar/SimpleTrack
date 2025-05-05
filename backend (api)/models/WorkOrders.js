import { DataTypes } from 'sequelize'
import sequelize from '../configdatabase.js'

const WorkOrder = sequelize.define('WorkOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  equipment_id: {
    type: DataTypes.CHAR(8),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('requested', 'approved', 'in progress', 'completed', 'rejected'),
    allowNull: true,
    defaultValue: "in progress"
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.ENUM('Cardio 1', 'Cardio 2', 'Cardio 3'),
    allowNull: false
  },
}, {
    tableName: 'work_orders',
  });

WorkOrder.associate = (models) => {
  WorkOrder.belongsTo(models.Equipment, { foreignKey: 'equipment_id',   onDelete: 'CASCADE', 
  })
}

export default WorkOrder