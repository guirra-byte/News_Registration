import { News } from "../../modules/model/News/News"

export interface INewsRepository {

  findOne(title: string): any
  findAll(): any
  create(title: string, description: string, categorie: string): any
  remove(title: string): any
  //update(): any
}