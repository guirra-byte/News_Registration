import { INewsRepository } from "../../Databases/repository/INewsRepository";

export class FindAllUseCase {

  constructor(private newsRepository: INewsRepository) { }

  async execute() {

    const findAll = await this.newsRepository.findAll()
    return findAll
  }
}