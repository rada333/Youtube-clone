require('dotenv').config();
const path = require('path');
const pool = require('../../config/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

// Rota para carregar a página do formulário
const logarUsuariosWeb = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'login.html'));
};

const logarUsuariosController = async (req, res) => {
    const { email, senha } = req.body;

    // Validação dos campos de entrada
    if(!email || !email.trim()){
        return res.status(400).json({ message: 'O campo E-mail é obrigatório.' })
    };

    if(!senha || !senha.trim()){
        return res.status(400).json({ message: 'O campo Senha é obrigatório.' })
    };

    try {
        // Verifica se o e-mail já está cadastrado
        const consultaEmail = await pool.query(
            'SELECT * FROM usuarios WHERE email = $1',
            [email]
        );

        if(consultaEmail.rowCount === 0){
            return res.status(400).json({ message: 'Usuário ou Senha inválidos'});
        };

        // Compara a Senha enviada pelo usuário com a senha do Banco de dados
        const senhaValida = await bcrypt.compare(senha, consultaEmail.rows[0].senha);

        if(!senhaValida) {
            return res.status(400).json({ message: 'Usuário ou Senha inválidos'});
        }

        const { senha: _, ...usuarioSemSenha} = consultaEmail.rows[0];

        const token = jwt.sign({ id: consultaEmail.rows[0].id }, jwtSecret, { expiresIn: '15min'});

        // Redireciona após o login bem-sucedido
        // res.cookie('token', token, { secure: process.env.NODE_ENV === 'production' });
        // return res.redirect('/videos'); // Redireciona para a página de vídeos após login bem-sucedido
        // Resposta com o token para o frontend
        return res.json({ token }); // Envia o token no corpo da resposta

    } catch (err) {
        console.error('Erro ao logar Usuário:', err.message);
        return res.status(500).json({ message: 'Erro ao logar Usuário'});
    }

};

module.exports = {
    logarUsuariosController,
    logarUsuariosWeb
};