import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
export default class AuthController {
  async signup({ request }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    await User.create(payload)

    // todo: send verify user email

    return {
      message: 'User created',
    }
  }

  async signin({ request, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    return await auth.use('api').createToken(user)
  }

  async signout({ auth }: HttpContext) {
    await auth.use('api').invalidateToken()

    return {
      message: 'logged out',
    }
  }
}
