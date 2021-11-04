import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = <{ user_id: string }>request.headers
      const users = this.listAllUsersUseCase.execute({ user_id })
      return response.json(users)
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { ListAllUsersController };