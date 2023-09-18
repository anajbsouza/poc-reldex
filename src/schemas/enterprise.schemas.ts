import Joi from "joi";
import { createEnterprise } from "@/protocols/enterpriseProtocol";

export const empresaSchema = Joi.object<createEnterprise>({
    nome: Joi.string().required(),
    logo: Joi.string().required(),
    servico: Joi.string().required(),
    tipo: Joi.string().required(),
    contatos: Joi.string().required(),
    historico: Joi.string().required()
})