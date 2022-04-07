import { INewsRepository } from "../../Databases/repository/INewsRepository";


export class FindOneUseCase {

  constructor(private newsRepository: INewsRepository) { }
  execute(title: string) {

    const verifyNewsExists = this.newsRepository.findOne(title)
    if (!verifyNewsExists) {

      throw new Error("Not exists this news, try again")
    }

    return verifyNewsExists
  }
}