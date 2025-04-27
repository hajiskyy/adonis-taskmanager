import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.create({
      id: -1,
      fullName: 'Deleted User',
      email: 'deleted@user.com',
      password: 'deleted',
      disabled: true,
    })
  }
}
