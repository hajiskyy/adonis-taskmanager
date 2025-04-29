import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(2),
    email: vine.string().trim().email().unique({
      table: 'users',
      column: 'email',
    }),
    password: vine.string().alphaNumeric().minLength(6),
  })
)
