import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Funcionarios extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('senha', 'senha')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.renameColumn('senha', 'senha')
    })
  }
}
