const express = require('express');
const { criarUsuariosController } = require('../controllers/usuarios/criarUsuariosController');
const { listarUsuariosController } = require('../controllers/usuarios/listarUsuariosController');
const { criarVideosController, criarVideosWeb } = require('../controllers/videos/criarVideosController');
const { listarVideosController } = require('../controllers/videos/listarVideosController');
const { logarUsuariosController, logarUsuariosWeb } = require('../controllers/usuarios/logarUsuariosController');
const { verificarLogin } = require('../middleware/verificarLogin');
const { listarCategoriasVideosController } = require('../controllers/videos/listarCategoriasVideosController');
const { deletarVideosController } = require('../controllers/videos/deletarVideosController');
const { listarVideosPorCategoriaController } = require('../controllers/videos/categoriaId');

const rotas = express();

// Rota para carregar a página do formulário
const adminWeb = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/admin', 'index.html'));
};

rotas.get('/login', logarUsuariosWeb);
rotas.get('/admin', adminWeb);
rotas.get('/videos', criarVideosWeb);

rotas.post('/admin/usuarios', criarUsuariosController);
rotas.get('/admin/usuarios', listarUsuariosController);
rotas.post('/admin/login', logarUsuariosController);

rotas.get('/admin/categorias', listarCategoriasVideosController);
rotas.get('/admin/videos', listarVideosController);
rotas.get('/admin/videos/:categoriaId', listarVideosPorCategoriaController);


rotas.use(verificarLogin);

rotas.post('/admin/videos', criarVideosController);
rotas.delete('/admin/videos/:id', deletarVideosController);

module.exports = rotas;