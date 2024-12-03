# Clone do YouTube

O Clone do YouTube é uma aplicação web que replica funcionalidades essenciais do YouTube, permitindo aos usuários cadastrar, listar e excluir vídeos.

O projeto foi desenvolvido utilizando Node.js e segue os padrões de API RESTful, garantindo uma arquitetura robusta e escalável. Além disso, inclui rotas protegidas por autenticação JWT, integração com PostgreSQL para armazenamento de dados e diversas funcionalidades pensadas tanto para usuários quanto para administradores.

Com uma interface administrativa dedicada e recursos de segurança como o hash de senhas utilizando bcrypt, este projeto é ideal para quem deseja explorar conceitos fundamentais de desenvolvimento backend e gerenciamento de APIs.

## 📋 Funcionalidades

- 📽 **Cadastrar vídeos**: Adicione novos vídeos ao sistema.
- 📋 **Listar vídeos**: Veja todos os vídeos cadastrados.
- ❌ **Deletar vídeos**: Remova vídeos específicos.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

### Dependências
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: Para hash de senhas e segurança.
- **[crypto](https://nodejs.org/api/crypto.html)**: Geração de chaves e funcionalidades criptográficas.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Gerenciamento de variáveis de ambiente.
- **[express](https://expressjs.com/)**: Framework para construção de APIs.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: Autenticação e geração de tokens JWT.
- **[pg](https://node-postgres.com/)**: Biblioteca para integração com PostgreSQL.

### Dependências de Desenvolvimento
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Para reinício automático do servidor durante o desenvolvimento.


## 🚀 Como Executar o Projeto

### Pré-requisitos
- **Node.js**: Certifique-se de que o Node.js está instalado na sua máquina.
- **PostgreSQL**: Configure um banco de dados PostgreSQL.

### Passo a Passo
1. **Clone o repositório**:
   ```   
   git clone https://github.com/seu-usuario/clone-youtube.git
2. **Instale as dependências**:
   ```  
   npm install
3. **Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis**:

   ```  
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   SECRET_KEY=
4. **Inicie o servidor**:
   ```  
   npm run dev
## 🧪 Rotas da API

### Web
- **GET /login**: Página de login para usuários.
- **GET /admin**: Página de administração.
- **GET /videos**: Página para criar novos vídeos.

### API
- **POST /admin/usuarios**: Cadastrar um novo usuário.
- **GET /admin/usuarios**: Listar todos os usuários cadastrados.
- **POST /admin/login**: Realizar login no sistema administrativo.
- **GET /admin/categorias**: Listar todas as categorias de vídeos.
- **GET /admin/videos**: Listar todos os vídeos cadastrados.
- **GET /admin/videos/:categoriaId**: Listar vídeos filtrados por categoria.
- **POST /admin/videos**: Cadastrar um novo vídeo (autenticado).
- **DELETE /admin/videos/:id**: Excluir um vídeo específico (autenticado).

### Middleware
- **Middleware**: `use(verificarLogin)` é aplicado para proteger rotas administrativas, garantindo que apenas usuários autenticados tenham acesso.


Cada rota foi projetada para atender a funcionalidades específicas, separando claramente as operações realizadas por usuários e administradores.


## 🛡️ Segurança

- Uso de **JWT** para autenticação.
- Senhas armazenadas utilizando **bcrypt**.


## 🤝 Contribuindo

Sinta-se à vontade para contribuir! Para sugestões ou dúvidas, abra uma **issue** ou envie um **pull request**.


## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.


## 🌟 Inspirado por

Este projeto é inspirado na interface e funcionalidades básicas do YouTube.

## ❤️ Resultado final
https://github.com/user-attachments/assets/b4465e49-25f1-4bd9-96b3-7d18f0846513


