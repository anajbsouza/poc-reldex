import { Request, Response } from 'express';
import { createEnterprise } from '../protocols/enterpriseProtocol';
import { enterpriseService } from '../services/enterprise.services'
import httpStatus from "http-status";

async function createEnterprises(req: Request, res: Response) {
    await enterpriseService.createEnterprise(req.body as createEnterprise);
    res.status(httpStatus.CREATED).send("Empresa adicionada com sucesso!");
}

async function readEnterpriseById(req: Request, res: Response) {
    const { id } = req.params;
    const enterprise = await enterpriseService.readEnterpriseById(id);
    res.status(httpStatus.OK).send(enterprise);
}

async function updateEnterprises(req: Request, res: Response) {
    const { id } = req.params;
    const enterprise = await enterpriseService.updateEnterprise(id, req.body as createEnterprise);
    res.status(httpStatus.CREATED).send(enterprise);
    console.log(req.body)
}

async function deleteEnterprises(req: Request, res: Response) {
    const { id } = req.params;
    await enterpriseService.deleteEnterprise(id);
    res.status(httpStatus.CREATED).send("Empresa deletada com sucesso!");
}

export const enterpriseController = {
    createEnterprises,
    readEnterpriseById,
    updateEnterprises,
    deleteEnterprises,
};
