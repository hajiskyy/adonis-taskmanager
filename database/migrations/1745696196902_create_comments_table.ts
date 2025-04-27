import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('comment')

      table
        .integer('user_id')
        .unsigned()
        .defaultTo(-1)
        .references('users.id')
        .onDelete('SET DEFAULT')
      table.integer('task_id').unsigned().references('tasks.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
