// Função para carregar categorias
async function carregarCategorias() {
    try {
        const response = await fetch('/admin/categorias');
        const categorias = await response.json();
        
        // Obtendo o elemento ul pelo ID
        const menuCategorias = document.querySelector('#menuCategorias');

        // Limpando o conteúdo atual do menu antes de adicionar as novas categorias
        menuCategorias.innerHTML = '';

        // Adicionando a categoria "Tudo" de forma estática
        const liTudo = document.createElement('li');
        liTudo.innerHTML = '<a href="#" class="menu-topo_ativo"><span>Tudo</span></a>';
        liTudo.dataset.id = 0; // Atribui o ID para a categoria "Tudo"
        menuCategorias.appendChild(liTudo);

        // Criando os itens de menu dinamicamente com base nas categorias recebidas
        categorias.forEach(categoria => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#"><span>${categoria.nome}</span></a>`;
            li.dataset.id = categoria.id; // Atribui o ID de cada categoria
            menuCategorias.appendChild(li);
        });

        // Adiciona o evento de clique após a criação dos itens
        adicionarEventosDeClique();
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
    }
}

// Chamando a função para carregar as categorias
window.addEventListener('load', carregarCategorias);



// Função para carregar vídeos da categoria selecionada
async function carregarVideos(categoriaId) {
    try {
        console.log('Carregando vídeos para a categoria ID:', categoriaId); // Depuração

        const response = await fetch(`/admin/videos/${categoriaId}`);
        const videos = await response.json(); // Converte a resposta em JSON

        // Verificar se a resposta dos vídeos está correta
        console.log('Vídeos recebidos:', videos); // Depuração

        // Seleciona o container onde os vídeos serão inseridos
        const videosContainer = document.querySelector('.videos-conteudo');

        // Limpa o container antes de adicionar os vídeos
        videosContainer.innerHTML = '';

        // Itera sobre os vídeos e cria o HTML dinamicamente
        videos.forEach(video => {
            const videoSection = document.createElement('section');
            
            videoSection.innerHTML = `
                <section class="videos-conteudo-video">
                    <div class="videos-conteudo-video_youtube">
                        ${video.url}
                    </div>
                    <div class="videos-conteudo-video_titulo">
                        <h4>${video.nome}</h4>
                    </div>
                    <div class="videos-conteudo-video_descricao">
                        <h5>${video.descricao}</h5>
                    </div>
                </section>
            `;

            // Adiciona o vídeo ao container principal
            videosContainer.appendChild(videoSection);
        });
    } catch (error) {
        console.error('Erro ao carregar vídeos:', error);
    }
}



// Função para adicionar os eventos de clique nos itens de menu
function adicionarEventosDeClique() {
    // Seleciona todos os itens de menu (li)
    const menuItems = document.querySelectorAll('#menuCategorias li');

    // Adiciona um evento de clique em cada item de menu
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Impede o comportamento padrão do link
            event.preventDefault();

            // Obtém o ID da categoria do item clicado através do atributo 'data-id'
            const categoriaId = event.target.closest('li').dataset.id;

            // Depuração para verificar se o ID está correto
            console.log('ID da categoria selecionada:', categoriaId);

            // Envia a requisição para carregar vídeos da categoria correspondente
            carregarVideos(categoriaId);
        });
    });
}

// Carrega vídeos ao carregar a página
window.addEventListener('load', () => {
    carregarVideos(0); // Carrega vídeos da categoria "Tudo" por padrão
});
    