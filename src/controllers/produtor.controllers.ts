import { Request, Response } from "express";
import { createPropriedadeService } from "../services/propriedade/createPropriedade.service";
import deletePropriedadeService from "../services/propriedade/deletePropriedade.service";

const createPropriedadeController = async (req: Request, res: Response): Promise<Response> => {
  const novaPropriedade = await createPropriedadeService(req.body);

  return res.status(201).json(novaPropriedade);
};

const deletePropriedadeController = async (req: Request, res: Response): Promise<Response> => {
  await deletePropriedadeService(req.params.id);

  return res.status(204).json();
};

export default createPropriedadeController;
deletePropriedadeController;
