/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const TeamsController = () => import('#controllers/v1/teams_controller')
const AuthController = () => import('#controllers/v1/auth_controller')
const ProjectsController = () => import('#controllers/v1/projects_controller')
const TasksController = () => import('#controllers/v1/tasks_controller')
const UserTasksController = () => import('#controllers/v1/user_tasks_controller')
const MembersController = () => import('#controllers/v1/members_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    // auth
    router.post('/signup', [AuthController, 'signup'])
    router.post('/signin', [AuthController, 'signin'])
    router.post('/signout', [AuthController, 'signout'])

    // teams
    router.resource('teams', TeamsController).apiOnly()
    router.resource('teams.members', MembersController).apiOnly()
    router.resource('teams.projects', ProjectsController).apiOnly()
    router.resource('teams.projects.tasks', TasksController).apiOnly()

    // bares
    router.resource('tasks', UserTasksController).apiOnly()
  })
  .prefix('v1')
  .prefix('api')
