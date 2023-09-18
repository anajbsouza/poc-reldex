import { connection } from "../database/database";
import { Enterprise } from "../protocols/enterpriseProtocol";
import { QueryResult } from 'pg';

async function createEnterprises(nome: string, logo: string, servico: string, tipo: string, contatos: string, historico: string) {

    await connection.query(`
        INSERT INTO enterprise 
            (name, logo, service, type, contacts, history) 
        VALUES 
            ($1, $2, $3, $4, $5, $6)
        RETURNING id`,
        [nome, logo, servico, tipo, contatos, historico]);

}

async function readEnterpriseById(id: number) {
    await connection.query(`SELECT * FROM enterprise WHERE id=$1;`, [id]);
}

async function updateEnterprises(id: number, nome: string, logo: string, servico: string, tipo: string, contatos: string, historico: string): Promise<QueryResult> {

    const enterprise = await connection.query(`
        UPDATE enterprise
        SET 
            name = $1,
            logo = $2,
            service = $3,
            type = $4,
            contacts = $5,
            history = $6
        WHERE
            id = $7
    `,
    [nome, logo, servico, tipo, contatos, historico, id]);

    return enterprise;
}

async function deleteEnterprises(id: number): Promise<QueryResult> {
    const enterprise: QueryResult = await connection.query(`DELETE FROM enterprise WHERE id = $1`, [id]);
    return enterprise;
}

export const enterpriseRepository = { createEnterprises, readEnterpriseById, updateEnterprises, deleteEnterprises };