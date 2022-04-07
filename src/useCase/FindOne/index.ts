import { NewsRepository } from "../../Databases/Implemenation/implementation.database";
import { FindOneUseCase } from "./FindOneUseCase";
import { FindOneController } from "./FindOneController";

const newsRepository = NewsRepository.getInstance()

const findOneUseCase = new FindOneUseCase(newsRepository)

const findOneController = new FindOneController(findOneUseCase)

export { findOneController }