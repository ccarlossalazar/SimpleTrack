import { DataTypes } from 'sequelize'
import sequelize from '../configdatabase.js'

const WorkOrder = sequelize.define('WorkOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  equipment_id: {
    type: DataTypes.CHAR(8),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('requested', 'approved', 'in progress', 'completed', 'rejected'),
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
    tableName: 'work_orders',
  });

WorkOrder.associate = (models) => {
  WorkOrder.belongsTo(models.User, { foreignKey: 'admin_id' });  // admin_id references the User model
  WorkOrder.belongsTo(models.Equipment, { foreignKey: 'equipment_id' });  // equipment_id references the Equipment model
}

export default WorkOrder