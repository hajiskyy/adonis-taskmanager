import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Project from './project.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Comment from './comment.js'
import User from './user.js'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare duedate: DateTime | null

  @column()
  declare priority: 'LOW' | 'MEDIUM' | 'HIGH' | null

  @column()
  declare status: 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE'

  @belongsTo(() => Project)
  declare Project: BelongsTo<typeof Project>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @manyToMany(() => User)
  declare assignees: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
