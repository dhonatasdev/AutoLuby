// import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VeiculosReservado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public veiculo_id: number

  @column()
  public data: number

  @column()
  public valor_reservado: number

  @column()
  public vendedor_id: number

}
