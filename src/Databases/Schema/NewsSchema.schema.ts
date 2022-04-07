import Sequelize from 'sequelize'
import { connection } from '../Database'

const newsSchema = connection.define('news', {

  title: {

    type: Sequelize.STRING,
    allowNull: false
  },
  description: {

    type: Sequelize.TEXT,
    allowNull: false
  },
  categorie: {

    type: Sequelize.STRING,
    allowNull: false
  }

})

newsSchema.sync({ force: false }).then(() => {

  console.log("A tabela de Notícia já foi criada --- 🎃🤩😎")
})

export { newsSchema }