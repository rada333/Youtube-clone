const pool = require('../../config/conexao');

const listarVideosPorCategoriaController = async (req, res) => {
    const categoriaId = req.params.categoriaId;

    try {
        let query;
        let params;

        // Se a categoria for "Tudo" (ID 1), retorna todos os vídeos
        if (categoriaId == 0) {
            query = `
                SELECT videos.id, videos.nome, videos.descricao, videos.url
                FROM videos;
            `;
            params = []; // Sem parâmetros, pois não há filtro
        } else {
            // Caso contrário, retorna os vídeos filtrados pela categoria
            query = `
                SELECT videos.id, videos.nome, videos.descricao, videos.url
                FROM videos
                JOIN categorias_videos ON videos.categorias_videos_id = categorias_videos.id
                WHERE categorias_videos.id = $1;
            `;
            params = [categoriaId]; // Parâmetro para filtrar pela categoria
        }

        const result = await pool.query(query, params);
        res.json(result.rows); // Retorna os vídeos da consulta

    } catch (error) {
        console.error('Erro ao consultar vídeos:', error);
        res.status(500).json({ error: 'Erro ao consultar vídeos' });
    }
};

module.exports = {
    listarVideosPorCategoriaController
};
    