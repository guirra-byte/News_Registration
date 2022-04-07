import { INewsRepository } from "../../Databases/repository/INewsRepository";
import { Request, Response } from 'express'

export class RemoveUseCase {

  constructor(private newsRepository: INewsRepository) { }
  execute(title: string) {

    const verifyNewsAlreadyExists = this.newsRepository.findOne(title)
    if (!verifyNewsAlreadyExists) {

      throw new Error("Not is possible delete a new, why news nots exists")
    }

    const remove = this.newsRepository.remove(title)
    return remove
  }
}