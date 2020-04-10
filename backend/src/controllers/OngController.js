const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;
        
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        console.log(id);
        return response.json({ id });
    },
    /*
    async delete(request, response){
        const { id } = request.params;

        const incident = await connection('incidents')
            .where('id', id)
            .select('incidents')
            .first();
        if (incident !== undefined){
            return response.status(401).json({erro: 'Operation not permitted'}); //Não autorizado
        }
        await connection('ongs').where('id', id).delete;
        
        return response.status(204).send();

    }
    */
};