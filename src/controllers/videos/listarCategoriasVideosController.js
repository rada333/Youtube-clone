const pool = require('../../config/conexao');

const listarCategoriasVideosController = async (req, res) => {
    try {
        // Consultar todos os vídeos ordenados pleo nome
        const videos = await pool.query(
            'SELECT * FROM categorias_videos ORDER BY nome'
        );

        // Retorna a lista de vídeos
        return res.status(200).json(videos.rows);

    } catch (err) {
        console.error('Erro ao listar Vídeos:', err.message);
        return res.status(500).json({ message: 'Erro ao listar Vídeos'});
    };
};

module.exports = {
    listarCategoriasVideosController
};