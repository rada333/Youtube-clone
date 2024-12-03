const pool = require('../../config/conexao');

const deletarVideosController = async (req, res) => {
    const { id } = req.params;

    try {
      const deletarVideo = await pool.query(
        'DELETE FROM videos WHERE id = $1 RETURNING *',
        [id]
      );
  
      if (deletarVideo.rows.length === 0) {
        return res.status(404).json({ mensagem: 'Vídeo não encontrado' });
      }
  
      res.status(200).json({ mensagem: 'Vídeo excluído com sucesso' });

    } catch (err) {
      console.error(err.message);
      res.status(500).json({ mensagem: 'Erro ao excluir Vídeo' });
    }
};

module.exports = {
    deletarVideosController
};
