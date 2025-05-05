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
  equipment_id: {
    type: DataTypes.CHAR(8),
    allowNull: false,
  },
  date_completed: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  details: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'maintenance_history',
})

MaintenanceHistory.associate = (models) => {
  MaintenanceHistory.belongsTo(models.WorkOrder, { foreignKey: 'work_order_id',   onDelete: 'CASCADE', 
  })
  MaintenanceHistory.belongsTo(models.Equipment, { foreignKey: 'equipment_id', onDelete: 'CASCADE', 
  })
}

export default MaintenanceHistory