import { response, Router } from 'express'
import { News } from '../modules/model/News/News'
const newsRoutes = Router()

//Imports dos Controllers
import { createController } from '../useCase/Create'
import { findAllController } from '../useCase/FindAll'
import { findOneController } from '../useCase/FindOne'
import { removeController } from '../useCase/Remove'

//Routes
newsRoutes.post('', (request, response) => {

  createController.handle(request, response)

})

newsRoutes.get('', (request, response) => {

  findAllController.handle(request, response)

})

newsRoutes.get('/:title', (request, response) => {

  findOneController.handle(request, response)

})

// newsRoutes.patch()

newsRoutes.delete('/:title', (request, response) => {

  removeController.handle(request, response)
})

export { newsRoutes }