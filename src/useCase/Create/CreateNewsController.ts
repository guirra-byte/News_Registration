import { CreateNewsUseCase } from "./CreateNewsUseCase";
import { Request, response, Response } from 'express'

export class CreateNewsController {

  constructor(private newsUseCase: CreateNewsUseCase) { }
  //Injeção de Dependência do useCase

  handle(request: Request, reponse: Response) {

    const { title, description, categorie } = request.body

    try {

      const create = this.newsUseCase.execute(title, description, categorie)
      return response.status(201).send("News are created")
    }

    catch (exception) {

      return reponse.status(400).json(exception)
    }
  }
}