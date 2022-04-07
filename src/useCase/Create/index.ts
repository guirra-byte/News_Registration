import { NewsRepository } from "../../Databases/Implemenation/implementation.database";
import { CreateNewsUseCase } from "./CreateNewsUseCase";
import { CreateNewsController } from "./CreateNewsController";


const newsRepository = NewsRepository.getInstance()

const createUseCase = new CreateNewsUseCase(newsRepository)

const createController = new CreateNewsController(createUseCase)

export { createController }