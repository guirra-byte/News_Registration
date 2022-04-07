import { News } from "../../modules/model/News/News";
import { INewsRepository } from "../repository/INewsRepository";
import { newsSchema } from "../Schema/NewsSchema.schema";

export class NewsRepository implements INewsRepository {



  private constructor() {

  }
  //Configuração do Singleton Pattern

  private static INSTANCE: NewsRepository

  public static getInstance(): NewsRepository {

    if (!NewsRepository.INSTANCE) {

      NewsRepository.INSTANCE = new NewsRepository()
    }

    return NewsRepository.INSTANCE
  }

  //Finalização do Singleton Pattern


  //Definição dos Providers ou Methods
  //Regras de Negócio

  async findOne(title: string) {

    const newsTitle = title

    const findNews = await newsSchema.findOne({

      where: { title: newsTitle },
      raw: true
    })

    return findNews

  }

  async findAll() {

    const listAll = await newsSchema.findAll({

      raw: true
    })

    return listAll
  }

  async create(title: string, description: string, categorie: string) {

    const newsProps = {

      title: title,
      description: description,
      categorie: categorie
    }

    const createNews = new News(newsProps)
    createNews.create

    return createNews
  }

  async remove(title: string) {

    const remove = await newsSchema.destroy({

      where: { title: title }
    })

    return remove
  }
}