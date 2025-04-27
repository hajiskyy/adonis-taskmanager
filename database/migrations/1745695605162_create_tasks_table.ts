import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('description')
      table.dateTime('duedate').nullable()
      table.integer('project_id').unsigned().references('projects.id').onDelete('SET NULL')

      table.enum('priority', ['LOW', 'MEDIUM', 'HIGH']).nullable()
      table.enum('status', ['BACKLOG', 'TODO', 'IN_PROGRESS', 'DONE']).defaultTo('BACKLOG')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
