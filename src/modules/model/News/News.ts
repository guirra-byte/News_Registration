import { Entity } from "../Entity";
import { newsSchema } from '../../../Databases/Schema/NewsSchema.schema'

type NewsProps = {

  title: string
  description: string
  categorie: string
}

export class News extends Entity<NewsProps>{

  constructor(props: NewsProps) {

    super(props)
  }

  set create(props: NewsProps) {

    newsSchema.create(props)

  }
}