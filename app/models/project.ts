import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Team from './team.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Task from './task.js'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @belongsTo(() => Team)
  declare team: BelongsTo<typeof Team>

  @hasMany(() => Task)
  declare tasks: HasMany<typeof Task>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
