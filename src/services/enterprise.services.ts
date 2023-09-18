import { QueryResult } from 'pg';
import { createEnterprise } from '../protocols/enterpriseProtocol';
import { enterpriseRepository } from '../repository/enterprise.repository';

async function createEnterprise(body: createEnterprise) {
    const {nome, logo, servico, tipo, contatos, historico} = body;
    await enterpriseRepository.createEnterprises(nome, logo, servico, tipo, contatos, historico)
}


// async function readEnterpriseById(id: string) {
//     const enterpriseId = parseInt(id);
//     const enterprise = await enterpriseRepository.readEnterpriseById(enterpriseId);
//     return enterprise;
// }

async function readEnterpriseById(id: string) {
    console.log(`Recebido id: ${id}`);
    const enterpriseId = parseInt(id, 10);
    console.log(`Após conversão: ${enterpriseId}`);
    if (isNaN(enterpriseId)) {
        console.error('ID inválido');
    }
    const enterprise = await enterpriseRepository.readEnterpriseById(enterpriseId);
    return enterprise;
}


async function updateEnterprise(id: string, body: createEnterprise) {
    const enterpriseId = parseInt(id);
    const {nome, logo, servico, tipo, contatos, historico} = body;
    await enterpriseRepository.updateEnterprises(enterpriseId, nome, logo, servico, tipo, contatos, historico)
}

async function deleteEnterprise(id: string) {
    const enterpriseId = parseInt(id);
    await enterpriseRepository.deleteEnterprises(enterpriseId);
}

export const enterpriseService = {
    createEnterprise,
    readEnterpriseById,
    updateEnterprise,
    deleteEnterprise,
};
