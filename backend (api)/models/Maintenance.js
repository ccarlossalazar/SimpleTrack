import { DataTypes } from 'sequelize'
import sequelize from '../configdatabase.js'

const MaintenanceHistory = sequelize.define('MaintenanceHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  work_order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_completed: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false
  }, cost: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: true,
    defaultValue: 0.00,
  },
}, {
  tableName: 'maintenance_history',
})

MaintenanceHistory.associate = (models) => {
  MaintenanceHistory.belongsTo(models.WorkOrder, { foreignKey: 'work_order_id', 
  })
}

export default MaintenanceHistory