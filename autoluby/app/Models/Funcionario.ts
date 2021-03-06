import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public avatarlink: string

  @column()
  public biografia: string

  @column()
  public senha: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(funcionario: Funcionario) {
    if (funcionario.$dirty.senha) {
      funcionario.senha = await Hash.make(funcionario.senha)
    }
  }
}
