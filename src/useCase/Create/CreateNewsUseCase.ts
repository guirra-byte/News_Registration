import { INewsRepository } from "../../Databases/repository/INewsRepository";

export class CreateNewsUseCase {

  constructor(private InewsRepository: INewsRepository) { }
  //Injeção de Dependência do Repository

  execute(title: string, description: string, categorie: string) {

    const verifyNewsExists = this.InewsRepository.findOne(title)

    if (verifyNewsExists) {

      throw new Error('This news already exists')
    }

    const createNews = this.InewsRepository.create(title, description, categorie)
    return createNews


  }
}