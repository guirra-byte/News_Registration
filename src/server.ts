import { app } from "./app";
import { connection } from '../src/Databases/Database'
import { newsRoutes } from './routes/News.routes'

connection
  .authenticate()
  .then(() => {

    console.log("O DataBase já está rodando --- 🎃🤩😎")
  })

app.use('news', newsRoutes)
app.listen(process.env.PORT || 3456, () => {

  console.log("O server já está rodando")
})