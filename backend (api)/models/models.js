import sequelize from '../configdatabase.js'
import { Sequelize } from 'sequelize'

import Equipment from './Equipment.js'
import WorkOrder from './WorkOrders.js'
import MaintenanceHistory from './Maintenance.js'

const models = {
  Equipment,
  WorkOrder,
  MaintenanceHistory,
}

Object.values(models).forEach((model) => {
  if (typeof model.associate === 'function') {
    model.associate(models)
  }
})

models.sequelize = sequelize
models.Sequelize = Sequelize

export default models
