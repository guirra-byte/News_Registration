import { FindOneUseCase } from "./FindOneUseCase";
import { Request, Response } from 'express'

export class FindOneController {

  constructor(private findOneUseCase: FindOneUseCase) { }
  handle(request: Request, response: Response) {

    const { title } = request.params

    try {

      const findOneNews = this.findOneUseCase.execute(title)
      return response.status(200).send(findOneNews)
    }
    catch (exception) {

      return response.status(404).send(exception)
    }
  }
}