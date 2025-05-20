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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
    tableName: 'work_orders',
  });

  WorkOrder.associate = (models) => {
    WorkOrder.belongsTo(models.Equipment, { foreignKey: 'equipment_id', onDelete: 'CASCADE' });
    WorkOrder.hasMany(models.MaintenanceHistory, { foreignKey: 'work_order_id' });
  }

export default WorkOrder