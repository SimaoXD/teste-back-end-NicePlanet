import { Request, Response } from "express";
import listProdutorPropriedadeService from "../services/produtor/listProdutorPropriedade.service";
import deleteProdutorService from "../services/usuarios/deleteUsuario.Service";
import { createProdutorService } from "../services/produtor/createProdutor.services";

const createProdutorController = async (req: Request, res: Response): Promise<Response> => {
  const novoProdutor = await createProdutorService(req.body);

  return res.status(201).json(novoProdutor);
};

const listProdutorPropriedadeController = async (req: Request, res: Response): Promise<Response> => {
  const PropriedadeProdutor = await listProdutorPropriedadeService(req.params.id);

  return res.status(200).json(PropriedadeProdutor);
};

const deleteProdutorController = async (req: Request, res: Response): Promise<Response> => {
  await deleteProdutorService(req.params.id);

  return res.status(204).json();
};

export { createProdutorController, listProdutorPropriedadeController, deleteProdutorController };
