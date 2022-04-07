import { FindAllUseCase } from "./FindAllUseCase";
import { Request, Response } from 'express'

export class FindAllController {

  constructor(private findAllUseCase: FindAllUseCase) { }
  handle(request: Request, response: Response): Response {

    try {

      const findAll = this.findAllUseCase.execute()
      return response.status(200).send(findAll)
    }
    catch (exception) {

      return response.status(400).json(exception)
    }
  }

}