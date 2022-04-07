import { NewsRepository } from "../../Databases/Implemenation/implementation.database";
import { RemoveUseCase } from "./RemoveUseCase";
import { RemoveController } from "./RemoveController";

const newsRepository = NewsRepository.getInstance()

const removeUseCase = new RemoveUseCase(newsRepository)

const removeController = new RemoveController(removeUseCase)

export { removeController }