import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Sensor from 'App/Models/Sensor'

export default class SensorType extends BaseModel {
  public static table='sensor_types'
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public unit: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Sensor)
  public sensors: HasMany<typeof Sensor>
}
