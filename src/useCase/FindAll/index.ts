import { NewsRepository } from "../../Databases/Implemenation/implementation.database";
import { FindAllUseCase } from "./FindAllUseCase";
import { FindAllController } from "./FindAllController";

const newsRepository = NewsRepository.getInstance()

const findAllUseCase = new FindAllUseCase(newsRepository)

const findAllController = new FindAllController(findAllUseCase)

export { findAllController }