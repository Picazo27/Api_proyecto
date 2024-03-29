import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import SensorType from 'App/Models/SensorType'

export default class Sensor extends BaseModel {
  public static table ='sensors'

  @column({ isPrimary: true })
  public id: number

  @column()
  public sensor_type_id: number

  @column()
  public activo: number

  @column()
  public value: number

  @column.dateTime({ autoCreate: true })
  public createda_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updateda_at: DateTime

  // Relación con el modelo SensorType (pertenece a un tipo de sensor)
  @belongsTo(() => SensorType)
  public sensorType: BelongsTo<typeof SensorType>
}
