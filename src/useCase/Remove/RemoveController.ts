import { RemoveUseCase } from "./RemoveUseCase";
import { Request, Response } from 'express'

export class RemoveController {

  constructor(private removeUseCase: RemoveUseCase) { }
  handle(request: Request, response: Response) {

    const { title } = request.params

    try {

      const removeNews = this.removeUseCase.execute(title)
      return response.status(204).send("The news are deleted")
    }
    catch (exception) {

      return response.status(404).json(exception)
    }
  }
}